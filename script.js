class BettingAssistant {
  constructor() {
    this.tickets = [];
    this.predefinedTickets = [
      // Ticket 1-81 (Soccer 13)
      ["2", "X", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 1
      ["X", "X", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 2
      ["1", "X", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 3
      ["2", "2", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 4
      ["X", "2", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 5
      ["1", "2", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 6
      ["2", "1", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 7
      ["X", "1", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 8
      ["1", "1", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 9
      ["2", "X", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 10
      ["X", "X", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 11
      ["1", "X", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 12
      ["2", "2", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 13
      ["X", "2", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 14
      ["1", "2", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 15
      ["2", "1", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 16
      ["X", "1", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 17
      ["1", "1", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 18
      ["2", "X", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 19
      ["X", "X", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 20
      ["1", "X", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 21
      ["2", "2", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 22
      ["X", "2", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 23
      ["1", "2", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 24
      ["2", "1", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 25
      ["X", "1", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 26
      ["1", "1", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "X"], // Ticket 27
      ["2", "X", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 28
      ["X", "X", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 29
      ["1", "X", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 30
      ["2", "2", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 31
      ["X", "2", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 32
      ["1", "2", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 33
      ["2", "1", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 34
      ["X", "1", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 35
      ["1", "1", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 36
      ["2", "X", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 37
      ["X", "X", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 38
      ["1", "X", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 39
      ["2", "2", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 40
      ["X", "2", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 41
      ["1", "2", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 42
      ["2", "1", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 43
      ["X", "1", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 44
      ["1", "1", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 45
      ["2", "X", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 46
      ["X", "X", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 47
      ["1", "X", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 48
      ["2", "2", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 49
      ["X", "2", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 50
      ["1", "2", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 51
      ["2", "1", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 52
      ["X", "1", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 53
      ["1", "1", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "2"], // Ticket 54
      ["2", "X", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 55
      ["X", "X", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 56
      ["1", "X", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 57
      ["2", "2", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 58
      ["X", "2", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 59
      ["1", "2", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 60
      ["2", "1", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 61
      ["X", "1", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 62
      ["1", "1", "1", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 63
      ["2", "X", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 64
      ["X", "X", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 65
      ["1", "X", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 66
      ["2", "2", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 67
      ["X", "2", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 68
      ["1", "2", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 69
      ["2", "1", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 70
      ["X", "1", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 71
      ["1", "1", "X", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 72
      ["2", "X", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 73
      ["X", "X", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 74
      ["1", "X", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 75
      ["2", "2", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 76
      ["X", "2", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 77
      ["1", "2", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 78
      ["2", "1", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 79
      ["X", "1", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 80
      ["1", "1", "2", "2", "1", "X", "2", "2", "1", "X", "2", "2", "1"], // Ticket 81
    ];

    this.currentPredefinedIndex = 0;
    this.currentTicket = [];
    this.mode = 10; // Default to Soccer 10
    this.visibleTickets = 4; // Number of tickets to show initially
    this.db = new Database();
    this.initializeApp();
  }

  initializeApp() {
    this.loadFromStorage();
    this.setupEventListeners();
    this.generateMatchTable();
    this.updateStats();
  }

  setupEventListeners() {
    document.getElementById("gameToggle").addEventListener("change", (e) => {
      this.mode = e.target.checked ? 13 : 10;
      this.generateMatchTable();
      // Clear current selections when switching modes
      this.currentTicket = [];
      this.displayTickets();
    });

    document
      .getElementById("generateTicket")
      .addEventListener("click", () => this.generateNextTicket());

    document
      .getElementById("saveTicket")
      .addEventListener("click", () => this.saveCurrentTicket());

    document
      .getElementById("exportTickets")
      .addEventListener("click", () => this.exportTickets());

    document
      .getElementById("resetAll")
      .addEventListener("click", () => this.resetAll());
  }

  generateMatchTable() {
    const tbody = document.querySelector("#matchTable tbody");
    tbody.innerHTML = "";

    for (let i = 1; i <= this.mode; i++) {
      const row = document.createElement("tr");
      row.className = "match-row";
      row.innerHTML = `
        <td>Match ${i}</td>
        <td><input type="radio" name="match${i}" value="1" data-team="home"></td>
        <td><input type="radio" name="match${i}" value="X" data-team="draw"></td>
        <td><input type="radio" name="match${i}" value="2" data-team="away"></td>
      `;
      tbody.appendChild(row);
    }
  }

  generateNextTicket() {
    if (this.mode === 13) {
      this.handleSoccer13Generation();
    } else {
      this.handleSoccer10Generation();
    }
  }

  handleSoccer13Generation() {
    if (this.currentPredefinedIndex >= this.predefinedTickets.length) {
      alert("All predefined tickets have been generated");
      return;
    }

    const nextTicket = this.predefinedTickets[this.currentPredefinedIndex];
    this.currentPredefinedIndex++;

    if (!this.ticketExists(nextTicket)) {
      this.displayAndSelectTicket(nextTicket);
      this.currentTicket = nextTicket;
    } else {
      this.handleSoccer13Generation(); // Skip already existing tickets
    }
  }

  handleSoccer10Generation() {
    if (this.currentTicket.length === 0) {
      this.currentTicket = this.generateRandomTicket();
      this.displayAndSelectTicket(this.currentTicket);
      return;
    }

    let nextTicket = this.findNextVariation() || this.generateRandomTicket();
    if (nextTicket) {
      this.displayAndSelectTicket(nextTicket);
      this.currentTicket = nextTicket;
    }
  }

  generateRandomTicket() {
    const options = ["1", "X", "2"];
    let ticket;
    do {
      ticket = Array(this.mode)
        .fill(0)
        .map(() => options[Math.floor(Math.random() * options.length)]);
    } while (this.ticketExists(ticket));
    return ticket;
  }

  displayAndSelectTicket(ticket) {
    // Clear existing selections
    document
      .querySelectorAll('input[type="radio"]')
      .forEach((input) => (input.checked = false));

    // Select the new combinations
    ticket.forEach((value, index) => {
      const radio = document.querySelector(
        `input[name="match${index + 1}"][value="${value}"]`
      );
      if (radio) radio.checked = true;
    });
  }

  findNextVariation() {
    // Implementation of the ticket generation logic
    // This is a simplified version - you'll need to expand this
    const ticket = [...this.currentTicket];
    const options = ["1", "X", "2"];

    for (let i = 0; i < ticket.length; i++) {
      const currentIndex = options.indexOf(ticket[i]);
      if (currentIndex < 2) {
        ticket[i] = options[currentIndex + 1];
        if (!this.ticketExists(ticket)) {
          return ticket;
        }
      }
    }
    return null;
  }

  saveCurrentTicket() {
    const selections = Array.from(
      document.querySelectorAll('input[type="radio"]:checked')
    ).map((input) => input.value);

    if (selections.length !== this.mode) {
      alert("Please select one option for each match");
      return;
    }

    if (this.mode === 13 && !this.isValidPredefinedTicket(selections)) {
      alert("This ticket is not part of the predefined Soccer 13 tickets");
      return;
    }

    const ticket = {
      selections,
      gameType: this.mode,
      isPredefined: this.mode === 13,
    };

    this.tickets.push(ticket);
    this.currentTicket = selections;
    this.saveToStorage();
    this.updateStats();
    this.displayTickets();
  }

  isValidPredefinedTicket(selections) {
    return this.predefinedTickets.some((ticket) =>
      ticket.every((val, idx) => val === selections[idx])
    );
  }

  displayTickets() {
    const container = document.getElementById("ticketsList");
    const reversedTickets = [...this.tickets].reverse();
    const visibleTickets = reversedTickets.slice(0, this.visibleTickets);

    container.innerHTML = `
      ${visibleTickets
        .map(
          (ticket, index) => `
        <div class="ticket">
          <div class="ticket-header">
            <div class="ticket-info">
              <div class="game-type">Soccer ${ticket.gameType}</div>
              <h4>Ticket ${this.tickets.length - index}</h4>
            </div>
            <div class="ticket-cost">$2.00</div>
          </div>
          <div class="ticket-body">
            ${ticket.selections
              .map(
                (selection, i) => `
                <div class="ticket-match">
                  <div class="match-number">Match ${i + 1}</div>
                  <div class="match-teams">
                    <span class="${selection === "1" ? "selected" : ""}">
                      Team A${i + 1}
                    </span>
                    <span class="${selection === "X" ? "selected" : ""}">
                      Draw
                    </span>
                    <span class="${selection === "2" ? "selected" : ""}">
                      Team B${i + 1}
                    </span>
                  </div>
                </div>`
              )
              .join("")}
          </div>
          <div class="ticket-footer">
            Date: ${new Date().toLocaleDateString()}
          </div>
        </div>
      `
        )
        .join("")}
      ${
        this.tickets.length > this.visibleTickets
          ? `<button id="loadMore" class="load-more">Load More Tickets</button>`
          : ""
      }
    `;

    // Add event listener to load more button if it exists
    const loadMoreBtn = document.getElementById("loadMore");
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        this.visibleTickets += 4;
        this.displayTickets();
      });
    }
  }

  updateStats() {
    document.getElementById("ticketCount").textContent = this.tickets.length;
    document.getElementById("totalCost").textContent = (
      this.tickets.length * 2
    ).toFixed(2);
  }

  exportTickets() {
    if (this.tickets.length === 0) {
      alert("No tickets to export. Please generate some tickets first.");
      return;
    }

    // Check if jsPDF is available
    if (typeof window.jspdf === "undefined") {
      alert(
        "PDF generation library is not loaded. Please refresh the page and try again."
      );
      return;
    }

    try {
      // Show loading state
      const exportBtn = document.getElementById("exportTickets");
      const originalText = exportBtn.textContent;
      exportBtn.textContent = "Generating PDF...";
      exportBtn.disabled = true;

      setTimeout(() => {
        try {
          const { jsPDF } = window.jspdf;
          const doc = new jsPDF();

          // Add title
          doc.setFontSize(20);
          doc.text("Soccer Betting Tickets", 105, 20, { align: "center" });

          let yPos = 40;

          this.tickets.forEach((ticket, index) => {
            if (yPos > 250) {
              doc.addPage();
              yPos = 20;
            }

            // Ticket header
            doc.setFontSize(14);
            doc.setTextColor(0, 31, 63);
            doc.text(
              `Ticket ${index + 1} - Soccer ${ticket.gameType}`,
              20,
              yPos
            );

            // Create matches data
            const matchesData = ticket.selections.map((sel, idx) => [
              `Match ${idx + 1}`,
              sel === "1" ? "Home Win" : sel === "X" ? "Draw" : "Away Win",
              sel,
            ]);

            // Add matches table
            doc.autoTable({
              startY: yPos + 5,
              head: [["Match", "Prediction", "Selection"]],
              body: matchesData,
              theme: "grid",
              styles: { fontSize: 10 },
              headStyles: { fillColor: [0, 31, 63] },
              margin: { left: 20, right: 20 },
            });

            yPos = doc.lastAutoTable.finalY + 20;
          });

          // Add summary
          doc.setFontSize(12);
          doc.text(`Total Tickets: ${this.tickets.length}`, 20, yPos);
          doc.text(
            `Total Cost: $${(this.tickets.length * 2).toFixed(2)}`,
            20,
            yPos + 7
          );
          doc.text(`Generated: ${new Date().toLocaleString()}`, 20, yPos + 14);

          // Save PDF
          doc.save("soccer-betting-tickets.pdf");

          // Restore button state
          exportBtn.textContent = originalText;
          exportBtn.disabled = false;
        } catch (error) {
          console.error("PDF generation error:", error);
          alert("Failed to generate PDF. Please try again.");
          exportBtn.textContent = originalText;
          exportBtn.disabled = false;
        }
      }, 100); // Small delay to allow UI update
    } catch (error) {
      console.error("Export error:", error);
      alert(
        "An error occurred while trying to export tickets. Please try again."
      );
    }
  }

  async saveToStorage() {
    await this.db.saveTicket({
      gameType: this.mode,
      selections: this.currentTicket,
    });
  }

  async loadFromStorage() {
    try {
      const tickets = await this.db.getAllTickets();
      if (tickets && tickets.length > 0) {
        this.tickets = tickets;
        this.displayTickets();
      }
    } catch (error) {
      console.error("Error loading tickets:", error);
    }
  }

  ticketExists(ticket) {
    return this.tickets.some(
      (t) =>
        t.selections &&
        t.selections.every((val, index) => val === ticket[index])
    );
  }

  async resetAll() {
    if (
      confirm(
        "Are you sure you want to reset everything? This will clear all tickets."
      )
    ) {
      try {
        // Clear database
        await this.db.clearAllTickets();

        // Reset local state
        this.tickets = [];
        this.currentPredefinedIndex = 0;
        this.currentTicket = [];
        this.visibleTickets = 4;

        // Update UI
        this.updateStats();
        this.displayTickets();

        // Clear radio selections
        document
          .querySelectorAll('input[type="radio"]')
          .forEach((input) => (input.checked = false));

        alert("All tickets have been cleared successfully!");
      } catch (error) {
        console.error("Error clearing tickets:", error);
        alert("There was an error clearing the tickets. Please try again.");
      }
    }
  }
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  window.bettingAssistant = new BettingAssistant();
});
