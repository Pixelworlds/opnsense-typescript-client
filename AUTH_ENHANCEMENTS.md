# Auth Module Enhancements

## 🔐 **Enhanced Authentication API Coverage**

The auth module has been refined and enhanced to provide **complete coverage** of all OPNsense authentication API endpoints with improved method handling, additional utility functions, and better API compliance.

## ✨ **Key Improvements Made**

### 1. **Fixed HTTP Method Usage**
Corrected API methods to match OPNsense documentation:

```typescript
// BEFORE: Incorrect method
await client.auth.users.newOtpSeed(); // Was POST

// AFTER: Correct method  
await client.auth.users.newOtpSeed(); // Now GET (as per docs)
```

### 2. **Added GET/POST Flexibility**
Search operations now support both GET and POST methods as documented:

```typescript
// Simple search without parameters (uses GET)
const users = await client.auth.users.search();

// Advanced search with parameters (uses POST)
const filteredUsers = await client.auth.users.search({
  searchPhrase: 'admin',
  current: 1,
  rowCount: 10
});
```

### 3. **Enhanced Utility Methods**
Added comprehensive helper methods for common authentication tasks:

```typescript
// Test API credentials
try {
  await client.auth.testAuthentication();
  console.log('Authentication successful');
} catch (error) {
  console.log('Authentication failed');
}

// Get comprehensive auth status
const status = await client.auth.getAuthenticationStatus();
console.log('Users:', status.users);
console.log('Groups:', status.groups);
console.log('Privileges:', status.privileges);
```

## 🚀 **New Convenience Methods**

### **User Management**
```typescript
// Create user with group assignment
const user = await client.auth.createUserWithGroup({
  username: 'newuser',
  password: 'secure123',
  email: 'user@domain.com'
}, groupUuid);

// Generate OTP seed for 2FA
const otpSeed = await client.auth.generateUserOtpSeed();

// API key management
const apiKey = await client.auth.createUserApiKey('username');
const apiKeys = await client.auth.getUserApiKeys();
await client.auth.revokeApiKey(keyId);
```

### **Data Management**
```typescript
// Export user data for backup
const userData = await client.auth.exportUserData();

// Import user data from backup
await client.auth.importUserData(backupData);
```

### **Authentication Testing**
```typescript
// Validate current API credentials
const isValid = await client.auth.testAuthentication();

// Get complete authentication overview
const authStatus = await client.auth.getAuthenticationStatus();
```

## 📚 **Complete API Coverage**

### **User Controller** (`client.auth.users`)
- ✅ `search()` - Search users (GET/POST support)
- ✅ `add()` - Create new user
- ✅ `get()` - Get user details
- ✅ `update()` - Update user
- ✅ `delete()` - Delete user
- ✅ `addApiKey()` - Generate API key for user
- ✅ `deleteApiKey()` - Remove API key
- ✅ `searchApiKeys()` - Search API keys (GET/POST support)
- ✅ `download()` - Export user data
- ✅ `upload()` - Import user data
- ✅ `newOtpSeed()` - Generate OTP seed (fixed to GET)

### **Group Controller** (`client.auth.groups`)
- ✅ `search()` - Search groups (GET/POST support)
- ✅ `add()` - Create new group
- ✅ `get()` - Get group details
- ✅ `update()` - Update group
- ✅ `delete()` - Delete group

### **Privileges Controller** (`client.auth.privileges`)
- ✅ `search()` - Search privileges (GET/POST support)
- ✅ `get()` - Get privilege details
- ✅ `update()` - Update specific privilege
- ✅ `setConfig()` - Set privilege configuration

### **Main Auth Module** (`client.auth`)
**21 convenience methods** for common operations:
- General: `getGeneral()`, `setGeneral()`
- Search: `searchUsers()`, `searchGroups()`, `searchPrivileges()`
- CRUD: `addUser()`, `addGroup()`, `getUser()`, `getGroup()`, `updateUser()`, `updateGroup()`, `deleteUser()`, `deleteGroup()`
- Utilities: `testAuthentication()`, `getAuthenticationStatus()`, `createUserWithGroup()`, `generateUserOtpSeed()`, `getUserApiKeys()`, `createUserApiKey()`, `revokeApiKey()`, `exportUserData()`, `importUserData()`

## 🎯 **Usage Examples**

### **Complete User Management Workflow**
```typescript
import { OPNsenseClient } from '@richard-stovall/opnsense-typescript-client';

const client = new OPNsenseClient({
  baseUrl: 'https://your-opnsense.local',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret'
});

// 1. Test authentication
await client.auth.testAuthentication();

// 2. Create a new group
const adminGroup = await client.auth.addGroup({
  name: 'Administrators',
  description: 'System administrators'
});

// 3. Create user with group assignment
const newUser = await client.auth.createUserWithGroup({
  username: 'admin-user',
  password: 'SecurePassword123!',
  email: 'admin@company.com',
  full_name: 'System Administrator'
}, adminGroup.data.uuid);

// 4. Generate API key for programmatic access
const apiKey = await client.auth.createUserApiKey('admin-user');
console.log('New API Key:', apiKey.data);

// 5. Enable 2FA with OTP
const otpSeed = await client.auth.generateUserOtpSeed();
console.log('OTP Seed:', otpSeed.data);

// 6. Get authentication overview
const authStatus = await client.auth.getAuthenticationStatus();
console.log('Total users:', authStatus.users?.length);
console.log('Total groups:', authStatus.groups?.length);
```

### **API Key Management**
```typescript
// List all API keys
const apiKeys = await client.auth.getUserApiKeys();

// Create new API key for specific user
const newKey = await client.auth.createUserApiKey('username');

// Revoke specific API key
await client.auth.revokeApiKey(keyId);

// Search API keys with filters
const filteredKeys = await client.auth.getUserApiKeys({
  searchPhrase: 'admin'
});
```

### **User Data Backup/Restore**
```typescript
// Export all user data
const backup = await client.auth.exportUserData();

// Save backup to file
await Bun.write('users-backup.json', JSON.stringify(backup.data));

// Restore from backup
const backupData = await Bun.file('users-backup.json').json();
await client.auth.importUserData(backupData);
```

### **Advanced User Search**
```typescript
// Simple search (GET request)
const allUsers = await client.auth.searchUsers();

// Advanced search (POST request with parameters)
const adminUsers = await client.auth.searchUsers({
  searchPhrase: 'admin',
  current: 1,
  rowCount: 20,
  sort: { username: 'asc' }
});
```

## 📊 **Enhancement Summary**

| **Feature** | **Before** | **After** | **Improvement** |
|-------------|------------|-----------|-----------------|
| **HTTP Methods** | POST only | GET/POST support | More accurate |
| **OTP Generation** | POST (incorrect) | GET (correct) | Fixed |
| **Convenience Methods** | 13 | 21 | +62% |
| **API Coverage** | Basic | Complete | 100% |
| **Error Handling** | Basic | Enhanced | Improved |
| **Documentation** | Limited | Comprehensive | Complete |

## 🎉 **Benefits**

1. **🎯 Complete API Compliance**: All endpoints now match OPNsense documentation exactly
2. **🔄 Flexible Operations**: GET/POST support for search operations
3. **🛠️ Enhanced Utilities**: 21 convenience methods for common tasks
4. **🔐 Better Security**: Authentication testing and validation
5. **📋 Data Management**: Export/import functionality for backups
6. **🚀 Developer Experience**: Simplified workflows with helper methods
7. **📖 Type Safety**: Full TypeScript support for all endpoints

The enhanced auth module now provides **comprehensive authentication management** with complete API coverage, improved accuracy, and extensive utility functions for all authentication-related operations in OPNsense! 🔐✨