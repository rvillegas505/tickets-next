// components/TicketCard.tsx
import Link from "next/link";
import { Ticket } from "@/models/ticket";



const TicketCard = (props: { ticket: Ticket } ) => {
    const { ticket } = props;
    return (
        <div className="card my-5">
        <Link href={`tickets/${ticket.id}`} className="no-underline-link">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
            </div>
        </Link>
        </div>
    );
};

export default TicketCard;