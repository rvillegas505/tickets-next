import axios from "axios";
import { Ticket } from "@/models/ticket";
import TicketCard from "./TicketCard";

const getTickets = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000)); //simular tiempo carga API
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
      {tickets.length > 0 ? (
        tickets.map((ticket: Ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))
      ) : (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
    );
  }