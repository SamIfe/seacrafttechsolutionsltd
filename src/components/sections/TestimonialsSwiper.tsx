"use client";

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
          <Card className="flex h-full min-h-[180px] items-center justify-center border-dashed bg-white/50 text-center">
            <CardDescription className="text-base font-medium text-text/60">
              &ldquo;{testimonialsPlaceholder.message}&rdquo;
            </CardDescription>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
