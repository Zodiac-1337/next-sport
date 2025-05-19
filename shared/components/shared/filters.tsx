"use client";

import React from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useQueryFilters, useFilters, useIngredients } from '@/shared/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);
  
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  }

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}

      <CheckboxFiltersGroup
        title="Пол"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Мужчинам", value: "1" },
          { text: "Женщинам", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "S", value: "44" },
          { text: "M", value: "46" },
          { text: "L", value: "48" },
          { text: "XL", value: "50" },
          { text: "XXL", value: "52" },
        ]}
      />

      {/* Фильтрация цен */}

      <div className="mt-5 border-y border-y-secondary py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={67000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={67000}
            placeholder="67000"
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices("priceTo", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={67000}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 67000]}
          onValueChange={updatePrices}
        />

        <CheckboxFiltersGroup
          title="Дополнительные продукты"
          name="ingredients"
          className="mt-5"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          loading={loading}
          onClickCheckbox={filters.setSelectedIngredients}
          selected={filters.selectedIngredients}
        />
      </div>
    </div>
  );
};
