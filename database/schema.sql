CREATE TABLE tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game_type INTEGER NOT NULL, -- 10 or 13
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    cost DECIMAL(10,2) DEFAULT 2.00
);

CREATE TABLE ticket_selections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_id INTEGER NOT NULL,
    match_number INTEGER NOT NULL,
    selection CHAR(1) NOT NULL, -- '1', 'X', or '2'
    FOREIGN KEY (ticket_id) REFERENCES tickets(id)
);

-- Optional: Create indexes for better performance
CREATE INDEX idx_ticket_selections_ticket_id ON ticket_selections(ticket_id);
