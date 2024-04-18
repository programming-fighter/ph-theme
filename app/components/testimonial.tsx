import TestimonialFive from "@/components/(testimonial)/testimonial-five";
import TestimonialThree from "./(testimonial)/default";
import TestimonialOne from "./(testimonial)/testimonial-one";
import TestimonialTwo from "./(testimonial)/testimonial-two";
import TestimonialFour from "./(testimonial)/testimonial-four";
import TestimonialSeven from "./(testimonial)/testimonial-seven";

const Testimonial = ({ testimonials, theme, design }: any) => {
  console.log(theme, "t");
  return (
    <>
      {theme === "default" && <TestimonialThree testimonials={testimonials} />}
      {theme === "one" && <TestimonialOne testimonials={testimonials} />}
      {theme === "two" && (
        <TestimonialTwo testimonials={testimonials} design={design} />
      )}
      {theme === "three" && <TestimonialThree testimonials={testimonials} />}
      {theme === "four" && (
        <TestimonialFour testimonials={testimonials} design={design} />
      )}
      {theme === "five" && <TestimonialFive testimonials={testimonials} />}
      {theme === "six" && <TestimonialSeven testimonials={testimonials} />}
    </>
  );
};

export default Testimonial;
