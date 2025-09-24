# 📦 Avatox

> A fast and lightweight library for generating personalized avatars from initials, perfect for profile pictures, dashboards, and user interfaces.

[![npm version](https://img.shields.io/npm/v/avatox)](https://www.npmjs.com/package/avatox)  
[![license](https://img.shields.io/npm/l/avatox)](LICENSE)  
[![downloads](https://img.shields.io/npm/dm/avatox)](https://www.npmjs.com/package/avatox)  

---

## 🚀 Installation

Install via **npm**:

```bash
npm install avatox
```

## 🧪 Example Usage

```js

import React from "react";
import Avatar from "avatox";

type Lead = {
  id: number;
  name?: string;
};

const leads: Lead[] = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3 },
];

export default function App() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {leads.map((lead) => (
        <Avatar
          key={lead.id}
          name={lead.name || "Unknown"}
          size="md"
        />
      ))}
    </div>
  );
}


```

## 💡 Use Cases

- User Profiles – Display initials when users don’t upload a profile picture.
- Chat Applications – Show avatars for participants in conversations.
- Contact Lists / CRMs – Generate quick, consistent avatars for leads, clients, or team members.
- Dashboards – Visualize users, contributors, or team members with minimal UI overhead.
- Fallback Avatars – Provide a clean alternative when an image fails to load.
- Collaborative Tools – Show multiple users’ initials in project boards, comments, or activity feeds.

---

## 📜 License

MIT © 2025 Renz Siguenza

---

## 💬 Feedback

Feel free to open issues or submit pull requests to suggest improvements or report bugs!!




