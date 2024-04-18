import TestimonialFive from "@/components/(testimonial)/testimonial-five";
import TestimonialThree from "./(testimonial)/default";
import TestimonialOne from "./(testimonial)/testimonial-one";
import TestimonialTwo from "./(testimonial)/testimonial-two";

const Testimonial = ({ testimonials, theme, design }: any) => {
  return (
    <>
      {theme === "default" && <TestimonialThree testimonials={testimonials} />}
      {theme === "one" && <TestimonialOne testimonials={testimonials} />}
      {theme === "two" && (
        <TestimonialTwo testimonials={testimonials} design={design} />
      )}
    </>
  );
};

export default Testimonial;
