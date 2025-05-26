const { pool } = require('../config/database');

class User {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.location = data.location;
    this.bio = data.bio;
    this.profile_image = data.profile_image;
  }

  // Create a new user
  static async create(userData) {
    try {
      const [result] = await pool.execute(
        'INSERT INTO users (name, email, phone, location, bio, profile_image) VALUES (?, ?, ?, ?, ?, ?)',
        [userData.name, userData.email, userData.phone, userData.location, userData.bio, userData.profile_image]
      );
      return result.insertId;
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }

  // Find user by ID
  static async findById(id) {
    try {
      const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
      return rows[0] || null;
    } catch (error) {
      throw new Error('Error finding user: ' + error.message);
    }
  }

  // Find user by email
  static async findByEmail(email) {
    try {
      const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
      return rows[0] || null;
    } catch (error) {
      throw new Error('Error finding user by email: ' + error.message);
    }
  }

  // Update user
  static async update(id, userData) {
    try {
      const [result] = await pool.execute(
        'UPDATE users SET name = ?, email = ?, phone = ?, location = ?, bio = ?, profile_image = ? WHERE id = ?',
        [userData.name, userData.email, userData.phone, userData.location, userData.bio, userData.profile_image, id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error('Error updating user: ' + error.message);
    }
  }
}

module.exports = User;