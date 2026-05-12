# Avatox

> A fast and lightweight library for generating personalized avatars from initials, perfect for profile pictures, dashboards, and user interfaces.

[![npm version](https://img.shields.io/npm/v/avatox)](https://www.npmjs.com/package/avatox)  
[![license](https://img.shields.io/npm/l/avatox)](LICENSE)  
[![downloads](https://img.shields.io/npm/dm/avatox)](https://www.npmjs.com/package/avatox)  

---

## Features

- **Multiple Variants** – Initials-based or random avatar images
- **Flexible Sizing** – Pre-configured sizes (sm, md, lg, xl) with custom override support
- **Customizable Styling** – Custom background colors, Tailwind CSS classes, and more
- **Image Fallback** – Automatically falls back to initials when images fail to load
- **Lightweight** – Minimal dependencies, optimized for performance
- **TypeScript Support** – Full type definitions included
- **Accessible** – Built with ARIA labels for screen readers
- **Click Handlers** – Built-in onClick support for interactive avatars

---

## Installation

Install via npm:

```bash
npm install avatox
```

**Requirements:**
- React 16 or higher
- Tailwind CSS (for styling classes)

---

## Quick Start

```tsx
import React from "react";
import { Avatar } from "avatox";

export default function App() {
  return (
    <div>
      <Avatar name="Alice Johnson" size="md" />
    </div>
  );
}
```

---

## API Documentation

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **Required** | Full name used to generate initials or select random avatar |
| `variant` | `"initials"` \| `"random"` | `"initials"` | Avatar display mode: initials or random image |
| `size` | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` | `"md"` | Predefined size of the avatar |
| `src` | `string` | `undefined` | Custom image URL (falls back to initials on error) |
| `bgColor` | `string` | `"bg-gradient-to-br from-blue-500 to-blue-600"` | Tailwind CSS background color class for initials |
| `className` | `string` | `""` | Additional CSS classes to apply |
| `imageExtension` | `string` | `"png"` | File extension for random variant images |
| `onClick` | `React.MouseEventHandler` | `undefined` | Click event handler |

### Size Reference

| Size | Dimensions | Text Size |
|------|------------|-----------|
| `sm` | 24px × 24px | 12px |
| `md` | 32px × 32px | 14px |
| `lg` | 40px × 40px | 16px |
| `xl` | 48px × 48px | 18px |

---

## Usage Examples

### Basic Initials Avatar

```tsx
import { Avatar } from "avatox";

<Avatar name="John Doe" size="lg" />
```

### Custom Background Color

```tsx
<Avatar 
  name="Jane Smith" 
  size="md"
  bgColor="bg-gradient-to-r from-purple-500 to-pink-500"
/>
```

### Random Avatar Variant

```tsx
<Avatar 
  name="Bob Wilson" 
  variant="random"
  size="xl"
/>
```

### Custom Image with Fallback

```tsx
<Avatar 
  name="Alice Cooper"
  src="https://example.com/avatar.jpg"
  size="lg"
/>
// Falls back to initials "AC" if image fails to load
```

### Interactive Avatar with Click Handler

```tsx
<Avatar 
  name="Charlie Brown"
  size="md"
  onClick={() => console.log("Avatar clicked!")}
  className="cursor-pointer hover:opacity-80 transition-opacity"
/>
```

### List of Avatars

```tsx
import React from "react";
import { Avatar } from "avatox";

type User = {
  id: number;
  name: string;
  imageUrl?: string;
};

const users: User[] = [
  { id: 1, name: "Alice Johnson", imageUrl: "https://example.com/alice.jpg" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Davis" },
];

export default function UserList() {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      {users.map((user) => (
        <Avatar
          key={user.id}
          name={user.name}
          src={user.imageUrl}
          size="md"
          onClick={() => alert(`Clicked ${user.name}`)}
        />
      ))}
    </div>
  );
}
```

### Avatar Stack (Overlapping)

```tsx
<div className="flex -space-x-2">
  <Avatar name="User One" size="md" className="ring-2 ring-white" />
  <Avatar name="User Two" size="md" className="ring-2 ring-white" />
  <Avatar name="User Three" size="md" className="ring-2 ring-white" />
</div>
```

---

## Customization

### Custom Sizes

While Avatox provides predefined sizes, you can override them with custom classes:

```tsx
<Avatar 
  name="Custom Size"
  className="!w-20 !h-20 !text-2xl"
/>
```

### Custom Styling

```tsx
<Avatar 
  name="Styled Avatar"
  size="lg"
  className="border-4 border-yellow-400 shadow-lg"
  bgColor="bg-gradient-to-tr from-green-400 to-blue-500"
/>
```

### Dark Mode Support

```tsx
<Avatar 
  name="Dark Mode"
  size="md"
  bgColor="dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900"
/>
```

---

## Configuration

### Random Avatar Images

The `random` variant uses a deterministic hash of the name to select from a pool of 20 avatar images hosted on Cloudflare R2. The same name will always generate the same avatar image.

```tsx
<Avatar 
  name="Consistent User"
  variant="random"
  imageExtension="png"
/>
```

### Initials Generation Logic

- **Single name**: First letter (e.g., "John" → "J")
- **Multiple names**: First letter of first name + first letter of last name (e.g., "John Doe" → "JD")
- **Empty/whitespace**: Returns "?"

---

## Use Cases

- **User Profiles** – Display initials when users don't upload a profile picture
- **Chat Applications** – Show avatars for participants in conversations
- **Contact Lists / CRMs** – Generate quick, consistent avatars for leads, clients, or team members
- **Dashboards** – Visualize users, contributors, or team members with minimal UI overhead
- **Fallback Avatars** – Provide a clean alternative when an image fails to load
- **Collaborative Tools** – Show multiple users' initials in project boards, comments, or activity feeds
- **Comment Sections** – Display user avatars next to comments or reviews
- **Team Member Lists** – Show team rosters with consistent avatar styling

---

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/avatox.git
cd avatox

# Install dependencies
npm install

# Run development mode
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Scripts

- `npm run dev` – Watch mode for development
- `npm run build` – Build production bundle
- `npm test` – Run test suite
- `npm run typecheck` – Type checking with TypeScript
- `npm run lint` – Lint source files

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** and ensure tests pass
3. **Add tests** for new features
4. **Update documentation** if needed
5. **Submit a pull request** with a clear description

### Reporting Issues

Found a bug or have a feature request? Please [open an issue](https://github.com/yourusername/avatox/issues) with:
- Clear description of the problem or feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

---

## Changelog

### v1.0.2 (Current)
- Initial stable release
- Support for initials and random variants
- Configurable sizes and styling
- Image fallback functionality
- TypeScript support
- Accessibility features

---

## License

MIT © 2025 Renz Siguenza

---

## Support

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/avatox/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/avatox/discussions)

---

## Acknowledgments

Built using:
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tsup](https://tsup.egoist.dev/)
- [Vitest](https://vitest.dev/)

---

**© 2025 Renz Siguenza**
