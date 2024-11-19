"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useState, useEffect } from "react";
import { formatDate } from "@/ultils/dateFormater"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]
const handleButtonClick = (id) => {
  window.location.href = `/eventos/${id}`;
};

export function TableDemo() {
  const url = 'http://localhost:3000/eventos';
  const [eventos, setEvento] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  async function getEventos() {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error('Ocorreu um erro ao buscar os eventos');
      }
      const data = await response.json();
      setEvento(data);
    } catch (e) {
      setError(e);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getEventos();
  }, []);

  return (
    <Table>
      <TableCaption >Lista de eventos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[400px]">Nome</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Metetodo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {eventos && eventos.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.titulo}</TableCell>
            <TableCell>{formatDate(item.data)}</TableCell>
            <TableCell>
              <button className="text-blue-500 hover:text-blue-700" key={item.id} onClick={() => handleButtonClick(item.id)}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{eventos && eventos.legth}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
