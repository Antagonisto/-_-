<?php
// Задание 1: Вычисление площади кольца
$radius_outer = 8; // Внешний радиус
$radius_inner = 5; // Внутренний радиус

$area = M_PI * ($radius_outer ** 2 - $radius_inner ** 2); // Формула для площади кольца

echo "Площадь кольца: $area <br>";

// Задание 2: Вывод фамилии и имени n+5 раз
$name = "Ковалёнок Максим";
$n = 4;

for ($i = 0; $i < $n + 5; $i++) {
    echo "$name <br>";
}

// Задание 3: Вывод отрицательных элементов массива
$array = [2, -5, 8, -3, 0, -7, 10, 4, -9, 6];

echo "Отрицательные элементы массива: ";
foreach ($array as $element) {
    if ($element < 0) {
        echo "$element ";
    }
}

echo "<br>";

// Задание 4: Операции со строками
$S1 = "Ковалёнок Максим";
$S2 = "МОНЮШКО";

// 1. Определить длину S2
$length_S2 = strlen($S2);
echo "Длина строки S2: $length_S2 <br>";

// 2. Записать строку S1 в обратном порядке
$reverse_S1 = join(array_reverse(preg_split('//u', $S1, -1, PREG_SPLIT_NO_EMPTY)));
echo "Строка S1 в обратном порядке: $reverse_S1 <br>";


// 3. Преобразовать строку S2 в нижний регистр
$lowercase_S2 = mb_strtolower($S2, 'UTF-8');
echo "Строка S2 в нижнем регистре: $lowercase_S2 <br>";

// Задание 5: Пользовательская функция для расчетов
function customCalculation($x, $y)
{
    $result = (((pow($x, 5)) + $y * sqrt(abs($y + $x))) / log(275.18)) - (pow($x, $y)) + ((tan($x)) / (sin($x) + 2));
    return $result;
}

// Пример использования пользовательской функции
$x_value = 2;
$y_value = 3;
$result = customCalculation($x_value, $y_value);
echo "Результат расчета: $result <br>";

include 'lr21.php';

?>
