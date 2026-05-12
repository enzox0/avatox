# Contributing to Avatox

Thank you for your interest in contributing to Avatox! We welcome contributions from the community and appreciate your help in making this project better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Questions](#questions)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. Please:

- Be respectful and considerate in your communication
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

---

## Getting Started

Before you begin:

1. Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) installed
2. Familiarize yourself with [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
3. Read through the [README.md](README.md) to understand the project
4. Check the [issue tracker](https://github.com/yourusername/avatox/issues) for open issues

---

## Development Setup

### 1. Fork and Clone

Fork the repository on GitHub, then clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/avatox.git
cd avatox
```

### 2. Add Upstream Remote

```bash
git remote add upstream https://github.com/yourusername/avatox.git
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 5. Start Development

```bash
npm run dev
```

This will start the build watcher. Make your changes and the project will rebuild automatically.

---

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Bug fixes** – Fix issues reported in the issue tracker
- **New features** – Add new functionality to the library
- **Documentation** – Improve or add to the documentation
- **Tests** – Add or improve test coverage
- **Performance improvements** – Optimize existing code
- **Code refactoring** – Improve code quality and maintainability

### Contribution Workflow

1. **Find or create an issue** – Check if an issue exists for what you want to work on. If not, create one to discuss your idea
2. **Get assigned** – Comment on the issue to let others know you're working on it
3. **Fork and branch** – Create a new branch from `main`
4. **Make changes** – Implement your changes following our coding standards
5. **Test** – Ensure all tests pass and add new tests if needed
6. **Commit** – Write clear, descriptive commit messages
7. **Push** – Push your changes to your fork
8. **Pull request** – Open a PR with a clear description of your changes

---

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid using `any` type unless absolutely necessary
- Use meaningful variable and function names

### React

- Use functional components with hooks
- Follow React best practices and patterns
- Keep components small and focused
- Use proper prop types

### Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use double quotes for strings
- Use trailing commas in objects and arrays
- Maximum line length: 100 characters

### Example

```tsx
import React from "react";
import type { AvatarProps } from "./types";

export const Avatar: React.FC<AvatarProps> = ({
  name,
  size = "md",
  variant = "initials",
  className = "",
}) => {
  // Component implementation
  return (
    <div className={`avatar ${className}`}>
      {/* Content */}
    </div>
  );
};
```

### Linting

Run the linter before committing:

```bash
npm run lint
```

---

## Testing Guidelines

### Writing Tests

- Write tests for all new features and bug fixes
- Use descriptive test names that explain what is being tested
- Follow the Arrange-Act-Assert pattern
- Test edge cases and error conditions

### Test Structure

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("should render initials from name", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("should apply custom size class", () => {
    render(<Avatar name="Jane Smith" size="lg" />);
    const avatar = screen.getByText("JS");
    expect(avatar).toHaveClass("w-10", "h-10");
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage

- Aim for at least 80% code coverage
- All new features must include tests
- Bug fixes should include regression tests

---

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` – A new feature
- `fix` – A bug fix
- `docs` – Documentation changes
- `style` – Code style changes (formatting, missing semicolons, etc.)
- `refactor` – Code refactoring without changing functionality
- `perf` – Performance improvements
- `test` – Adding or updating tests
- `chore` – Maintenance tasks, dependency updates, etc.

### Examples

```bash
feat(avatar): add support for custom image extensions

fix(avatar): resolve fallback image loading issue

docs(readme): update installation instructions

test(avatar): add tests for click handler functionality
```

### Best Practices

- Use the imperative mood ("add feature" not "added feature")
- Keep the subject line under 50 characters
- Capitalize the subject line
- Don't end the subject line with a period
- Separate subject from body with a blank line
- Wrap the body at 72 characters
- Use the body to explain what and why, not how

---

## Pull Request Process

### Before Submitting

1. **Update your branch** with the latest changes from `main`:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run all checks**:
   ```bash
   npm run typecheck
   npm run lint
   npm test
   npm run build
   ```

3. **Update documentation** if you've changed APIs or added features

4. **Add tests** for new functionality

### PR Title

Use the same format as commit messages:

```
feat(avatar): add support for custom shapes
```

### PR Description

Include:

- **Summary** – Brief description of what the PR does
- **Motivation** – Why is this change needed?
- **Changes** – List of changes made
- **Testing** – How was this tested?
- **Screenshots** – If applicable, add screenshots or GIFs
- **Breaking changes** – Note any breaking changes
- **Related issues** – Link to related issues (e.g., "Closes #123")

### PR Template

```markdown
## Summary
Brief description of the changes

## Motivation
Why is this change needed?

## Changes
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Unit tests added/updated
- [ ] All tests passing
- [ ] Manual testing completed

## Screenshots
(if applicable)

## Breaking Changes
(if any)

## Related Issues
Closes #123
```

### Review Process

- At least one maintainer must approve the PR
- All CI checks must pass
- Address all review comments
- Keep the PR focused on a single concern
- Be responsive to feedback

---

## Reporting Bugs

### Before Reporting

1. Check if the bug has already been reported
2. Try to reproduce the bug with the latest version
3. Gather relevant information (OS, Node version, React version, etc.)

### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- OS: [e.g., Windows 11, macOS 14]
- Node version: [e.g., 18.17.0]
- React version: [e.g., 18.2.0]
- Avatox version: [e.g., 1.0.2]

**Additional context**
Add any other context about the problem here.
```

---

## Suggesting Features

### Before Suggesting

1. Check if the feature has already been suggested
2. Consider if it fits the project's scope and goals
3. Think about how it would benefit other users

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.

**Would you be willing to implement this feature?**
Yes/No
```

---

## Questions

If you have questions about contributing:

- Check the [README.md](README.md) first
- Search existing [issues](https://github.com/yourusername/avatox/issues)
- Open a new issue with the "question" label
- Email: [renzsiguenza0000@gmail.com](mailto:renzsiguenza0000@gmail.com)

---

## Recognition

Contributors will be recognized in:

- The project's README
- Release notes
- GitHub contributors page

Thank you for contributing to Avatox! 🎉

---

**© 2025 Renz Siguenza**
