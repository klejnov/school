<?php
declare(strict_types=1);

class Area
{
    private $length, $width;

    public function getArea(): float
    {
        return $this->length * $this->width;
    }

    public function __construct(float $length, float $width)
    {
        $this->length = $length;
        $this->width = $width;
    }
}