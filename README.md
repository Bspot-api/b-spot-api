# B-Spot API

Public NestJS backend API for the B-Spot platform - a comprehensive database of companies linked to investment funds and influential networks.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Docker and Docker Compose
- PostgreSQL

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bspot-api/b-spot-api.git
   cd b-spot-api
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start the database**
   ```bash
   docker-compose up -d postgres
   ```

5. **Run database migrations**
   ```bash
   pnpm migration:up
   ```

6. **Start development server**
   ```bash
   pnpm dev
   ```

## 📁 Project Structure

```
src/
├── modules/           # Feature modules
│   ├── auth/         # Authentication
│   ├── company/      # Company management
│   ├── fund/         # Investment fund management
│   ├── personality/  # Personality management
│   └── sector/       # Sector management
├── migrations/       # Database migrations
└── seeders/          # Database seeders
```

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build the application
- `pnpm test` - Run tests
- `pnpm lint` - Run linting
- `pnpm migration:create` - Create new migration
- `pnpm migration:up` - Apply migrations
- `pnpm migration:down` - Rollback migrations

## 🔧 Development

- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with MikroORM
- **Authentication**: Better-Auth integration
- **Architecture**: Clean Architecture principles

## 📚 API Documentation

- Swagger/OpenAPI documentation available at `/api` endpoint
- RESTful API design
- Comprehensive entity management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

**Note**: This is the public API repository. For the complete platform, see the private repository.
