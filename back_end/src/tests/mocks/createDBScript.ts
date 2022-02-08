import fs from "fs";

const createMyScript = async () => {
  const filePath = __dirname.split("src/")[0];
  const file = fs.existsSync(`${filePath}/mysqlQuery.sh`);
  const file2 = fs.readFileSync(`${filePath}/.env`, 'utf-8');
  const user = file2.split("\n")[2].slice(17);
  const password = file2.split("\n")[3].slice(17);
  if (!file) {
    const pathSchema =
      'pathSchema=${PWD}"/src/tests/mocks/default_database.sql"\n';
    const mysqlCommand = `mysql --user="${user}" --password="${password}" < $pathSchema`;
    fs.writeFileSync("mysqlQuery.sh", pathSchema.concat(mysqlCommand));
  }
};

export default createMyScript();