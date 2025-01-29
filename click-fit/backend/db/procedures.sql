CREATE PROCEDURE addUser (
    IN p_email VARCHAR(255),
    IN p_password VARCHAR(255),
    IN p_type VARCHAR(255)
)
BEGIN
    INSERT INTO users (email, password, type) VALUES (p_email, p_password, p_type);
END;