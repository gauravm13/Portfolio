import React , {useState} from 'react';
import { cn } from '../lib/utils';

const mySKills = [
    
    { name: "C/C++", level: 95, category: "Programming" },
    { name: "Python", level: 85, category: "Programming" },
    { name: "SQL", level: 85, category: "Programming" },
    { name: "VHDL", level: 70, category: "Programming" },


    { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 75, category: "backend" },
  { name: "REST API", level: 60, category: "backend" },
  { name: "Nodemon", level: 60, category: "backend" },


  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Postman", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
]

const categories = [ "all", "Programming", "frontend", "backend", "tools" ];

export const Skills = () => {
 
 const [activeCategory, setActiveCategory] = useState("all");

 const filterskills = mySKills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>My <span className='text-primary'>Skills</span></h2>

  <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
       {filterskills.map((skill, index) => 
        <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover">
            <div className='text-left mb-4'>
                <h3 className='font-semibold text-lg'>{skill.name}</h3>
            </div>
            <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden' >
            <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]' style={{ width: skill.level + "%"
            }}/></div>
            </div>
            
       )}
       </div>
       

        </div>
    </section>
  )
}
