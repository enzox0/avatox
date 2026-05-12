# Security Policy

## Supported Versions

We take security seriously and actively maintain the following versions of Avatox:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

**Note:** We recommend always using the latest stable version to ensure you have the most recent security updates and bug fixes.

---

## Reporting a Vulnerability

If you discover a security vulnerability in Avatox, please help us maintain the security of the project by reporting it responsibly.

### How to Report

**Please DO NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing:

**📧 [renzsiguenza0000@gmail.com](mailto:renzsiguenza0000@gmail.com)**

### What to Include

To help us understand and resolve the issue quickly, please include:

1. **Description** – A clear description of the vulnerability
2. **Impact** – What could an attacker potentially do?
3. **Steps to Reproduce** – Detailed steps to reproduce the vulnerability
4. **Proof of Concept** – Code snippets or screenshots demonstrating the issue
5. **Affected Versions** – Which versions are affected?
6. **Suggested Fix** – If you have ideas on how to fix it (optional)
7. **Your Contact Information** – So we can follow up with you

### Example Report

```
Subject: [SECURITY] XSS vulnerability in Avatar component

Description:
The Avatar component does not properly sanitize the 'name' prop, 
allowing potential XSS attacks when rendering user-provided names.

Impact:
An attacker could inject malicious scripts that execute in the 
context of the application.

Steps to Reproduce:
1. Pass a name prop with HTML/JavaScript: 
   <Avatar name="<script>alert('XSS')</script>" />
2. The script executes when the component renders

Affected Versions:
1.0.0 - 1.0.2

Suggested Fix:
Sanitize the name prop before rendering or use textContent 
instead of innerHTML.
```

---

## Response Timeline

We are committed to responding to security reports promptly:

- **Initial Response** – Within 48 hours of receiving your report
- **Status Update** – Within 7 days with our assessment and planned actions
- **Fix Timeline** – Critical vulnerabilities will be patched within 14 days
- **Public Disclosure** – After a fix is released and users have had time to update

### What to Expect

1. **Acknowledgment** – We'll confirm receipt of your report
2. **Investigation** – We'll investigate and validate the vulnerability
3. **Fix Development** – We'll develop and test a fix
4. **Release** – We'll release a patched version
5. **Disclosure** – We'll publish a security advisory
6. **Credit** – We'll credit you in the advisory (if you wish)

---

## Security Best Practices

When using Avatox in your application, follow these security best practices:

### 1. Input Validation

Always validate and sanitize user input before passing it to the Avatar component:

```tsx
// ✅ Good - Validate input
const sanitizedName = validateAndSanitize(userInput);
<Avatar name={sanitizedName} />

// ❌ Bad - Direct user input
<Avatar name={userInput} />
```

### 2. Content Security Policy (CSP)

Implement a strong Content Security Policy to prevent XSS attacks:

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; img-src 'self' https://trusted-cdn.com;">
```

### 3. Image Sources

When using custom image sources, ensure they come from trusted domains:

```tsx
// ✅ Good - Trusted source
<Avatar 
  name="John Doe" 
  src="https://your-trusted-cdn.com/avatars/user123.jpg" 
/>

// ⚠️ Caution - User-provided URLs
// Validate and sanitize before use
const validatedUrl = validateImageUrl(userProvidedUrl);
<Avatar name="John Doe" src={validatedUrl} />
```

### 4. Click Handlers

Be cautious with click handlers that execute user-provided code:

```tsx
// ✅ Good - Controlled handler
<Avatar 
  name="John Doe" 
  onClick={() => handleAvatarClick(userId)} 
/>

// ❌ Bad - Executing user-provided code
<Avatar 
  name="John Doe" 
  onClick={eval(userProvidedCode)} 
/>
```

### 5. Dependency Management

Keep dependencies up to date to avoid known vulnerabilities:

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update Avatox to the latest version
npm update avatox
```

### 6. Server-Side Rendering (SSR)

If using SSR, ensure proper sanitization of props:

```tsx
// ✅ Good - Sanitize on the server
const sanitizedProps = {
  name: sanitize(userData.name),
  src: validateUrl(userData.avatar),
};

<Avatar {...sanitizedProps} />
```

---

## Known Security Considerations

### 1. Image Loading

The Avatar component loads images from external sources when using the `src` or `variant="random"` props. Ensure:

- Images are served over HTTPS
- Image sources are from trusted domains
- Implement proper CORS policies

### 2. User-Generated Content

When displaying avatars based on user-generated content:

- Validate and sanitize all user input
- Implement rate limiting to prevent abuse
- Use Content Security Policy headers
- Consider implementing image moderation

### 3. Privacy

When using the `random` variant:

- Avatar selection is deterministic based on the name
- The same name always generates the same avatar
- No personal data is sent to external services
- Images are served from a public CDN

---

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.3) and announced through:

- **GitHub Security Advisories** – [Security tab](https://github.com/yourusername/avatox/security/advisories)
- **npm Release Notes** – Check the [npm package page](https://www.npmjs.com/package/avatox)
- **GitHub Releases** – [Releases page](https://github.com/yourusername/avatox/releases)

### Subscribing to Updates

To stay informed about security updates:

1. **Watch the repository** on GitHub (select "Custom" → "Security alerts")
2. **Enable npm notifications** for package updates
3. **Follow the project** on GitHub
4. **Subscribe to release notifications**

---

## Vulnerability Disclosure Policy

We follow responsible disclosure practices:

### Our Commitment

- We will respond to security reports promptly
- We will keep you informed throughout the process
- We will credit you in security advisories (if desired)
- We will not take legal action against security researchers who:
  - Report vulnerabilities responsibly
  - Do not exploit vulnerabilities beyond proof of concept
  - Do not access or modify user data
  - Do not disrupt our services

### Your Responsibility

When researching vulnerabilities:

- Do not access or modify data that doesn't belong to you
- Do not perform attacks that could harm users or services
- Do not publicly disclose the vulnerability before we've released a fix
- Act in good faith and follow responsible disclosure practices

---

## Security Hall of Fame

We recognize and thank security researchers who help keep Avatox secure:

<!-- Contributors will be listed here -->

*No security vulnerabilities have been reported yet.*

---

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://react.dev/learn/security)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)
- [GitHub Security Advisories](https://docs.github.com/en/code-security/security-advisories)

---

## Contact

For security-related inquiries:

- **Email**: [renzsiguenza0000@gmail.com](mailto:renzsiguenza0000@gmail.com)
- **Subject Line**: `[SECURITY] Your security concern`

For general questions and support:

- **GitHub Issues**: [Open an issue](https://github.com/yourusername/avatox/issues)
- **GitHub Discussions**: [Start a discussion](https://github.com/yourusername/avatox/discussions)

---

**Thank you for helping keep Avatox and its users safe!** 🔒

---

**© 2025 Renz Siguenza**
