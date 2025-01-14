// import Image from "next/image";
// import styles from "./page.module.css";
import TicketList from "./TicketList";

export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                <h2>Tickets</h2>
                <p><small>Currently open tickets.</small></p>
                </div>
            </nav>
            <TicketList />
        </main>
    );
  }
  