import axios from "axios";
import { Ticket } from "@/models/ticket";
import Link from "next/link";

const getTickets = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tickets');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching data:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

export default async function TicketList() {
    const tickets = await getTickets();
    return (
        <>
        {tickets.map((ticket: Ticket) => (
          <div key={ticket.id} className="card my-5">
          <Link href={`tickets/${ticket.id}`} className="no-underline-link">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
        ))}
        {tickets.length === 0 && (
            <p className="text-center">There are no open tickets, yay!</p>
        )}
        </>
    );
  }