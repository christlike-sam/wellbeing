import "../css/team.css";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";

export default function Team() {
  const teamMembers = [
    {
      img: t1,
      role: "Chief Executive Officer",
      name: "Dr. Mbutu Kariuki, PHD",
    },
    {
      img: t2,
      role: "Policy Research & Evaluation Lead",
      name: "Dr. Anne Njoroge, MD, MPH, PHD",
    },
    {
      img: t3,
      role: "Policy Advocacy & Communications Lead",
      name: "Mugumo Munene",
    },
    {
      img: t4,
      role: "Head Of Finance & Administration",
      name: "Linda Gathogo",
    },
  ];

  return (
    <section className="team">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <figure key={index} className="team-member">
            <img src={member.img} alt={member.role} />
            <figcaption>
              <h3>{member.role}</h3>
              <p>{member.name}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
