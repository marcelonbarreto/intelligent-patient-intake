CREATE TABLE patient_submissions (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    submission_data JSONB NOT NULL,
    recommendation TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);