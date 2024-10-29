export interface Transaction{
  transaction_date?: Date;
  total_amount?: number;
  payment_method?: string;
  status: string;
  created_at: Date;
  updated_at?: Date;
} 

export interface TransactionItem{
  quantity: number
}