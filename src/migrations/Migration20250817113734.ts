import { Migration } from '@mikro-orm/migrations';

export class Migration20250817113734 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `alter table "funds" alter column "description" type text using ("description"::text);`,
    );

    this.addSql(
      `alter table "personalities" alter column "description" type text using ("description"::text);`,
    );

    this.addSql(
      `alter table "sectors" alter column "description" type text using ("description"::text);`,
    );

    this.addSql(
      `alter table "companies" alter column "description" type text using ("description"::text);`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table "funds" alter column "description" type varchar(255) using ("description"::varchar(255));`,
    );

    this.addSql(
      `alter table "personalities" alter column "description" type varchar(255) using ("description"::varchar(255));`,
    );

    this.addSql(
      `alter table "sectors" alter column "description" type varchar(255) using ("description"::varchar(255));`,
    );

    this.addSql(
      `alter table "companies" alter column "description" type varchar(255) using ("description"::varchar(255));`,
    );
  }
}
