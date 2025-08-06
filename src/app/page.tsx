"use client"
import styles from "./page.module.css";

export default function Home() {
    // --- Event Data and Logic ---
    const events = [
        { name: "Summer Solstice Sauna", date: "2025-06-21", location: "Gothenburg" },
        { name: "Autumn Equinox Ritual", date: "2025-09-22", location: "Stockholm" },
        { name: "Midsummer Eve Aufguss", date: "2025-06-20", location: "Gothenburg" },
        { name: "Winter Fire & Ice", date: "2026-01-15", location: "Kiruna" },
        { name: "Spring Awakening", date: "2025-04-18", location: "Malmö" },
    ];
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
    const sortedEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    return (
        <>
            <header className={styles.header}>
                <div className={styles.leftNavContainer}>
                    <a href="#home">
                        <img src="/LOGO-white-text.png" alt="Top Left Logo" className={styles.topLeftLogo} />
                    </a>
                    <nav className={styles.mainNav}>
                        <a href="#about" className={styles.topLink}>About</a>
                        <a href="#contact" className={styles.topLink}>Contact</a>
                    </nav>
                </div>
            </header>

            {/* Section 1: Home / Landing */}
            <section id="home" className={styles.pageSection}>
                <video src={"/video2.mp4"} autoPlay muted loop className={styles.videoBackground} />
                <div className={styles.overlay}></div>
                <div className={styles.mainContent}>
                    <img src="/logo-white.png" alt="Main Company Logo" className={styles.mainLogo} />
                    <div className={styles.leftSidebarText}><p> LÖGA © 2025 </p></div>
                </div>
            </section>

            {/* Section 2: About (MODIFIED) */}
            {/* ADDED .aboutSection class for unique background and layout */}
            <section id="about" className={`${styles.pageSection} ${styles.aboutSection}`}>
                {/* REMOVED video. Background is now handled in CSS. */}
                <div className={styles.overlay}></div>
                <div className={styles.aboutContainer}>
                    {/* CHANGED class to .aboutText for specific styling */}
                    <div className={styles.aboutText}>
                        <h2>About Us</h2>
                        <p>
                            LÖGA is a multi-sensory sauna journey.
                        </p>
                    </div>
                    <div className={styles.eventList}>
                        <h3>Events</h3>
                        {sortedEvents.map((event) => {
                            const eventDate = new Date(event.date);
                            const isPast = eventDate < currentDate;
                            return (
                                <div 
                                  key={event.name} 
                                  className={`${styles.eventItem} ${isPast ? styles.pastEvent : ''}`}
                                >
                                    <span>{event.date}</span>
                                    <span>{event.name}</span>
                                    <span>{event.location}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 3: Contact */}
            <section id="contact" className={styles.pageSection}>
                <video src={"/video3.mp4"} autoPlay muted loop className={styles.videoBackground} />
                <div className={styles.overlay}></div>
                <div className={`${styles.sectionContent} ${styles.contactContent}`}>
                    <h2>Contact</h2>
                    <p>Get in touch with us. You can reach us via email at contact@example.com or follow us on our social media channels. We look forward to hearing from you!</p>
                </div>
            </section>
        </>
    );
}