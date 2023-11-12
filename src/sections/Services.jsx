import { ServiceCard } from "../components";
import { ourServices } from "../constants/data";

const Services = () => {

  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {ourServices.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;