"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { equipment } from "@/content/equipment";
import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MotionCard } from "@/components/ui/MotionCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { EquipmentItem } from "@/types/content";

import "swiper/css";

function EquipmentSlideCard({ item }: { item: EquipmentItem }) {
  const reducedMotion = useReducedMotion();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
        >
          <MotionCard className="relative h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue/10 to-navy/5 transition-transform duration-300 group-hover:scale-[1.04]" />
            <div className="relative flex h-full min-h-[220px] flex-col justify-end p-6 transition-transform duration-300 group-hover:-translate-y-1">
              <Badge variant="outline" className="mb-3 w-fit font-mono">
                {item.code}
              </Badge>
              <CardTitle as="h3" className="text-base">
                {item.name}
              </CardTitle>
              {!reducedMotion ? (
                <CardDescription className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.description}
                </CardDescription>
              ) : (
                <CardDescription>{item.description}</CardDescription>
              )}
            </div>
          </MotionCard>
        </button>
      </DialogTrigger>
      <DialogContent>
        <Badge variant="outline" className="mb-3 w-fit font-mono">
          {item.code}
        </Badge>
        <CardTitle as="h3">{item.name}</CardTitle>
        <CardDescription className="mt-3 text-base">
          {item.description}
        </CardDescription>
      </DialogContent>
    </Dialog>
  );
}

export function EquipmentSwiper({
  items = equipment,
}: {
  items?: readonly EquipmentItem[];
}) {
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleProgress = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    const total = swiper.slides.length - 1;
    setProgress(total > 0 ? swiper.activeIndex / total : 0);
  };

  return (
    <div className="mt-12">
      <div className="mb-3 flex items-center justify-end gap-2">
        <button
          type="button"
          className="rounded-md border border-border p-2 text-navy hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          aria-label="Previous equipment slide"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          className="rounded-md border border-border p-2 text-navy hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          aria-label="Next equipment slide"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Equipment inventory highlights"
      >
        <Swiper
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.1 },
            1280: { slidesPerView: 4.1 },
          }}
          onSlideChange={handleProgress}
          onSwiper={handleProgress}
        >
          {items.map((item) => (
            <SwiperSlide key={`${item.code}-${item.name}`}>
              <EquipmentSlideCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className="mt-4 h-1 w-full overflow-hidden rounded-full bg-navy/10"
        aria-hidden
      >
        <div
          className="h-full bg-cyan transition-transform duration-300"
          style={{
            transform: `scaleX(${Math.max(progress, 0.05)})`,
            transformOrigin: "left center",
          }}
        />
      </div>
    </div>
  );
}

export function EquipmentGridFallback() {
  return (
    <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {equipment.slice(0, 8).map((item) => (
        <li key={`${item.code}-${item.name}`}>
          <Card className="h-full">
            <Badge variant="outline" className="mb-3 font-mono">
              {item.code}
            </Badge>
            <CardTitle as="h3" className="text-base">
              {item.name}
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </li>
      ))}
    </ul>
  );
}
