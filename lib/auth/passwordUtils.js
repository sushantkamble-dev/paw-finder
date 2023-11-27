const argon2 = require('argon2');

export async function encryptPassword(password) {
    return argon2.hash(password);
  }

export async function verifyPassword(hash, password) {
    return argon2.verify(hash, password);
}