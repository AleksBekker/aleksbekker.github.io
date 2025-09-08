import { DynamicIcon, dynamicIconImports } from "lucide-react/dynamic";
export const AboutSection = () => {
  const AboutCard = (props: {
    icon: keyof typeof dynamicIconImports;
    header: string;
    text: string;
  }) => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <DynamicIcon name={props.icon} className="h-8 w-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {props.header}
        </h3>
        <p className="text-gray-700"> {props.text} </p>
      </div>
    );
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6">
            {/*I'm a passionate designer and developer with over 5 years of
            experience creating beautiful, functional websites and applications.
            My approach combines minimalist aesthetics with thoughtful
            functionality to create memorable user experiences.*/}
            I'm a passionate developer with a diverse set of creations.
          </p>
          <p className="text-lg text-gray-700">
            When I'm not designing or coding, you can find me exploring new
            hiking trails, experimenting with photography, or reading about
            emerging design trends.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutCard
            icon="pen-tool"
            header="Design"
            text="I create clean, intuitive designs that prioritize user experience while maintaining visual appeal."
          />
          <AboutCard
            icon="code"
            header="Development"
            text="I build responsive, performant websites and applications using modern technologies and best practices."
          />
          <AboutCard
            icon="user"
            header="Collaboration"
            text="I work closely with clients and teams to ensure projects meet objectives and exceed expectations."
          />
        </div>
      </div>
    </section>
  );
};
