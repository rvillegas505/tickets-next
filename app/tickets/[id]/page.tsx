import { Ticket } from "@/models/ticket";
import axios from "axios";


async function getTicket(id: string): Promise<Ticket | null> {
    try {
        const response = await axios.get(`http://localhost:5000/tickets/` + id);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Manejar errores devolviendo null
    }
}

export default async function TicketDetails({ params }: { params: { id: string } }) {
    
    const id = params.id;
    const ticket = await getTicket(id);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            {!ticket ? (
                <div>Error: Ticket not found</div>
            ) : 
            (
                <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
                </div>
            )}
        </main>
    )
     
}