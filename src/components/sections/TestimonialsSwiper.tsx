"use client";

import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonialsPlaceholder } from "@/content/company";
import { Card, CardDescription } from "@/components/ui/Card";

import "swiper/css";

export function TestimonialsSwiper() {
  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <Card
            className="flex h-full min-h-[180px] flex-col items-center justify-center gap-4 border-[#172168]/15 bg-white text-center shadow-[0_8px_24px_rgba(23,33,104,0.08)]"
            style={{ borderTop: "3px solid #F5BF23" }}
          >
            <Quote
              className="h-6 w-6 text-[#F5BF23] [filter:drop-shadow(0_0_0.75px_#172168)]"
              strokeWidth={2.5}
              aria-hidden
            />
            <CardDescription className="text-base font-medium text-[#1B1F23]">
              &ldquo;{testimonialsPlaceholder.message}&rdquo;
            </CardDescription>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
