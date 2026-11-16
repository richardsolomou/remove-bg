# Contributing to remove-bg

Thank you for your interest in contributing! This guide will help you get started with development.

## Development

### Prerequisites

- Node.js 24
- pnpm

### Setup

```bash
git clone https://github.com/richardsolomou/remove-bg.git
cd remove-bg
pnpm install
```

### Development Commands

```bash
# Start development server
pnpm dev

# Run every check CI runs: formatting, lint, types, and tests
pnpm check

# Fix formatting and lint issues
pnpm fix

# Build for production
pnpm build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the checks: `pnpm check`
5. Submit a pull request

### Code Quality

This project uses:

- **TypeScript**: Strict type checking
- **Oxlint and Oxfmt**: Fast linter and formatter
- **TanStack Start**: React framework
- **Tailwind CSS**: Utility-first CSS

## License

MIT - see [LICENSE](LICENSE) file for details.
