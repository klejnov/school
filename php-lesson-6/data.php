<?php

class Fraction
{

    public $numerator; // Числитель
    public $denominator; // Знаменатель

    public function __construct($numerator, $denominator)
    {
        // отловим ошибки, если в качестве оргумента конструктору передано НЕ число, либо знаменатель ноль
        if (!is_numeric($numerator) == true || !is_numeric($denominator) == true) {
            throw new Exception('Введено не число');
        }
        if ($denominator == 0) {
            throw new Exception('Деление на ноль');
        }
        $this->numerator = $numerator;
        $this->denominator = $denominator;

    }

    public function reduction() // метод сокращения дроби
    {
        $a = abs($this->numerator);
        $b = abs($this->denominator);

        while ($a != $b) { // определим общий числитель
            if ($a > $b)
                $a -= $b;
            else
                $b -= $a;
        }
        echo "Вы ввели числитель: $this->numerator и знаменатель $this->denominator <br><br>";
        echo "Общий числитель у этих двух чисел: $a. <br> Получаем дробь вида: " . $this->numerator / $a . "/" . $this->denominator / $a . "<br><br>";
    }


    public function decimal() // метод представления дроби в десятичном виде
    {
        if ($this->denominator == 0) {
            echo "Деление на ноль";

        } else {
            echo "Десятичный вид: " . round($this->numerator / $this->denominator, 2) . "<br><br>";

        }

    }

    public static function statsMethodSum($fraction1, $fraction2) // Метод для суммы
    {
        $number1 = $fraction1->numerator / $fraction1->denominator;
        $number2 = $fraction2->numerator / $fraction2->denominator;
        echo "Сумма: ";
        echo $number1 + $number2 . "<br>";
    }

    public static function statsMethodSub($fraction1, $fraction2) // Метод для вычитания
    {
        $number1 = $fraction1->numerator / $fraction1->denominator;
        $number2 = $fraction2->numerator / $fraction2->denominator;
        echo "Частное: ";
        echo $number1 - $number2 . "<br>";
    }

    public static function statsMethodMultipl($fraction1, $fraction2) // Метод для умножения
    {
        $number1 = $fraction1->numerator / $fraction1->denominator;
        $number2 = $fraction2->numerator / $fraction2->denominator;
        echo "Умножение: ";
        echo $number1 * $number2 . "<br>";
    }

    public static function statsMethodDivis($fraction1, $fraction2) // Метод для деления
    {
        $number1 = $fraction1->numerator / $fraction1->denominator;
        $number2 = $fraction2->numerator / $fraction2->denominator;
        echo "Деление: ";

        echo $number2 == 0 ? 'на ноль' : $number1 / $number2 . "<br>";
    }
}

//echo $test = Fraction::reduction(9, 12);

// отловим ошибки, если в качестве оргумента передано НЕ число
try {

    // Создадим два объекта экземпляра класса Fraction:
    $newObject1 = new Fraction(1, 2);
    $newObject2 = new Fraction(6, 3);

    // Вывод результата для заданий сокращения дроби и для представления в десятичном виде
    echo $newObject1->reduction();
    echo $newObject1->decimal();

    echo "<strong>Cтатические методы для арифметических операций с двумя дробями:</strong>";
    Fraction::statsMethodSum($newObject1, $newObject2);
    Fraction::statsMethodSub($newObject1, $newObject2);
    Fraction::statsMethodMultipl($newObject1, $newObject2);
    Fraction::statsMethodDivis($newObject1, $newObject2);

} catch (Exception $e) {
    echo "Ошибка: {$e->getMessage()}";
}
