import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export async function GET() {
  try {
    // 读取 CSV 文件
    const filePath = path.join(process.cwd(), 'public/data', 'time_info_final_example.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // 解析 CSV 数据
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      cast: (value, context) => {
        // 转换数值类型
        if (context.column === 'is_trade' || 
            context.column === 'is_week_end' || 
            context.column === 'is_month_end' || 
            context.column === 'is_quarter_end' || 
            context.column === 'is_year_end' || 
            context.column === 'trade_day_rank') {
          return parseInt(value, 10);
        }
        return value;
      }
    });

    return NextResponse.json(records);
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return NextResponse.json(
      { error: 'Failed to read data' },
      { status: 500 }
    );
  }
} 