import TestimonialFive from "@/components/(testimonial)/testimonial-five";
import TestimonialThree from "./(testimonial)/default";
import TestimonialOne from "./(testimonial)/testimonial-one";
import TestimonialTwo from "./(testimonial)/testimonial-two";
import TestimonialFour from "./(testimonial)/testimonial-four";
import TestimonialSeven from "./(testimonial)/testimonial-seven";
import TestimonialTwelve from "./(testimonial)/testimonial-twelve";
import TestimonialTwentySeven from "./(testimonial)/testimonial-twentyseven";
import TestimonialThirtyFive from "./(testimonial)/testimonial-thirtyfive";

const Testimonial = ({ testimonials, theme, design }: any) => {
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
      {theme === "seven" && <TestimonialFive testimonials={testimonials} />}
      {theme === "eight" && <TestimonialFive testimonials={testimonials} />}
      {theme === "nine" && (
        <TestimonialTwelve testimonials={testimonials} design={design} />
      )}
      {theme === "ten" && <TestimonialSeven testimonials={testimonials} />}
      {theme === "twelve" && (
        <TestimonialTwo testimonials={testimonials} design={design} />
      )}
      {theme === "fifteen" && (
        <TestimonialTwelve testimonials={testimonials} design={design} />
      )}
      {theme === "twentyseven" && (
        <TestimonialTwentySeven testimonials={testimonials} design={design} />
      )}
      {theme === "thirtyone" && (
        <TestimonialTwentySeven testimonials={testimonials} design={design} />
      )}
      {theme === "thirtysix" && (
        <TestimonialTwentySeven testimonials={testimonials} design={design} />
      )}
      {theme === "thirtyfive" && (
        <TestimonialThirtyFive testimonials={testimonials} />
      )}
    </>
  );
};

export default Testimonial;
