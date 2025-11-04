import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import { Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Tyler Donovan",
      role: "Co-Founder",
      image: teamMember1,
      bio: "Tyler Donovan is a software engineer at Capital One in Tysons, Virginia, and a recent graduate of the University of Virginia, where he earned a Bachelor of Science in Computer Science. Throughout his academic and professional journey, Tyler has been driven by a passion for helping others reach their potential. He has served as a teaching assistant for UVA's Computer Science department, volunteered with Jill's House in the DMV area, and worked as an EMT in Loudoun County. These experiences have strengthened his commitment to mentorship and education, which he now brings to his tutoring and mentorship programs.",
      quote: "I've always been passionate about personal growth and sharing that journey with others. We live in a time when technology and society can either hold us back or help us grow, and it's more important than ever for young people to recognize that and take ownership of their lives. My own growth came from time, mentorship, and self-awareness — and I want to help students discover those same tools earlier, so they can build confidence and lead more fulfilling lives.",
      linkedin: "https://linkedin.com/in/donovantylert/"
    },
    {
      name: "Tommy Bonina",
      role: "Co-Founder",
      image: teamMember2,
      bio: "Tommy recently graduated from the McIntire School of Commerce at the University of Virginia with a degree in finance and computer science. At 22 years old, he's currently writing a non-fiction personal growth book targeting high schoolers and working part-time as a \"quant\" for a private investment fund manager. As a former Eagle scout, he takes pride in giving back to his community, notably helping students as a TA for his quantitative analysis course and through programs like College Mentors for Kids.",
      quote: "I want to help others become comfortable with the best versions of themselves—whatever that is. While I was in high school, it was not clear to me who I wanted to be or what it took to figure that out, and I know I would have appreciated dedicated help along the way. It's my goal to enable others to have that magical light-bulb realization of self-growth and reflection I've had countless times after many mistakes.",
      linkedin: "https://linkedin.com/in/tommy-bonina-471241213/"
    }
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          Meet Our Team
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="animate-in fade-in slide-in-from-bottom-4 duration-1000 group flex"
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-[var(--card-shadow)] border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col w-full">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${member.name === "Tyler Donovan" ? "scale-150 object-[center_20%]" : ""}`}
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-foreground font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
