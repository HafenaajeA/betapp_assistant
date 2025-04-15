class Database {
  constructor() {
    this.initDatabase();
  }

  async initDatabase() {
    // Using IndexedDB for client-side storage
    const request = indexedDB.open("BettingDB", 1);

    request.onerror = (event) => {
      console.error("Database error:", event.target.error);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Create tickets store
      if (!db.objectStoreNames.contains("tickets")) {
        const ticketStore = db.createObjectStore("tickets", {
          keyPath: "id",
          autoIncrement: true,
        });
        ticketStore.createIndex("gameType", "gameType", { unique: false });
        ticketStore.createIndex("createdAt", "createdAt", { unique: false });
      }
    };
  }

  async saveTicket(ticket) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("BettingDB", 1);

      request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(["tickets"], "readwrite");
        const store = transaction.objectStore("tickets");

        const ticketData = {
          gameType: ticket.gameType,
          selections: ticket.selections,
          createdAt: new Date(),
          cost: 2.0,
        };

        const addRequest = store.add(ticketData);

        addRequest.onsuccess = () => resolve(addRequest.result);
        addRequest.onerror = () => reject(addRequest.error);
      };

      request.onerror = () => reject(request.error);
    });
  }

  async getAllTickets() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("BettingDB", 1);

      request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(["tickets"], "readonly");
        const store = transaction.objectStore("tickets");
        const getAllRequest = store.getAll();

        getAllRequest.onsuccess = () => resolve(getAllRequest.result);
        getAllRequest.onerror = () => reject(getAllRequest.error);
      };

      request.onerror = () => reject(request.error);
    });
  }

  async clearAllTickets() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("BettingDB", 1);

      request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(["tickets"], "readwrite");
        const store = transaction.objectStore("tickets");
        const clearRequest = store.clear();

        clearRequest.onsuccess = () => resolve();
        clearRequest.onerror = () => reject(clearRequest.error);
      };

      request.onerror = () => reject(request.error);
    });
  }
}

// Export the Database class
window.Database = Database;
