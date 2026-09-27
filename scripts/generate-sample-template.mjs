import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

async function generateSampleTemplate() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Member Fees');

  // Define columns
  worksheet.columns = [
    { header: 'Member ID', key: 'memberId', width: 15 },
    { header: 'First Name', key: 'firstName', width: 20 },
    { header: 'Last Name', key: 'lastName', width: 20 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Amount Paid', key: 'amount', width: 15 },
    { header: 'Date', key: 'date', width: 15 },
    { header: 'Payment Method', key: 'method', width: 20 },
    { header: 'Notes', key: 'notes', width: 30 },
  ];

  // Make header row bold and frozen
  worksheet.getRow(1).font = { bold: true };
  worksheet.views = [{ state: 'frozen', xSplit: 0, ySplit: 1 }];

  // Add some sample data (clearly fake)
  worksheet.addRows([
    {
      memberId: 'MEM-001',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      amount: 100,
      date: '2023-10-01',
      method: 'Bank Transfer',
      notes: 'Sample note',
    },
    {
      memberId: 'MEM-002',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      amount: 150,
      date: '2023-10-05',
      method: 'Cash',
      notes: '',
    },
    {
      memberId: 'MEM-003',
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.j@example.com',
      amount: 200,
      date: '2023-10-10',
      method: 'Mobile Money',
      notes: 'Late fee included',
    },
  ]);

  // Ensure public directory exists
  const publicDir = path.resolve('./public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Save the file
  const filePath = path.join(publicDir, 'mcms_sample_template.xlsx');
  await workbook.xlsx.writeFile(filePath);
  console.log(`Sample template generated at: ${filePath}`);
}

generateSampleTemplate().catch((err) => {
  console.error('Error generating template:', err);
  process.exit(1);
});
