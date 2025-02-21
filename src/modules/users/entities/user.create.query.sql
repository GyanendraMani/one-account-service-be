CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  -- Unique user ID
    email VARCHAR(255) UNIQUE NOT NULL,  -- User email (used for login)
    phone_number VARCHAR(20) UNIQUE,  -- Optional phone for MFA
    password_hash TEXT,  -- Hashed password (if using custom auth)
    full_name VARCHAR(255),  -- User's full name
    profile_picture TEXT,  -- Optional profile picture URL
    status VARCHAR(20) CHECK (status IN ('active', 'inactive', 'banned')) DEFAULT 'active',  
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
