var randomloc =  Math.floor(Math.random()*5)
var loc1 = randomloc;
var loc2 = loc1 + 1;
var loc3 = loc2 + 1;
var guess;
var hits=0;
var guesses=0;
var isSunk=false;
var arr = ["⬜️","⬜️","⬜️","⬜️","⬜️","⬜️","⬜️"];
var arr2 = [];

var about =  "Привет!\nЭто игра морской бой 🚢\nПредставь, что в 7 ячейках расположен 3-палубный корабль и твоя задача - потопить его.\nДля наглядности показаны все ячейки.\nПопадание отмечается символом ❌, промах 🔘";
alert(about);

while (isSunk == false){
	var arr3=arr.join('');
	guess = prompt(" Готов к выстрелу! (Выберите ячейку от 0 до 6):\n " + arr3);
	if (guess < 0 || guess > 6){
		alert("Введите корректное значение от 0 до 6");
	} else {
		if (guess == loc1 || guess == loc2 || guess == loc3){
			if (arr[guess] == '❌' && arr2[guess] == true){
				alert("⛔️ Некорректно! Вы уже стреляли по данной ячейке");
			} else {
				hits++;
				guesses++;
				if (arr[guess] == arr[loc1]){
					arr[loc1]='❌';
					arr2[guess]=true;
				} else if (arr[guess] == arr[loc2]){
					arr[loc2]='❌';
					arr2[guess]=true;
				} else if (arr[guess] == arr[loc3]){
					arr[loc3]='❌';
					arr2[guess]=true;
				}
				var arr3=arr.join('');
				alert("💥 Попал! 💥\n" + arr3);
			}
			if (hits == 3){
				isSunk = true;
				var arr3=arr.join('');
				alert("🎉 Ты выиграл! 🎉\n" + arr3);
			}
		} else if (arr[guess] == '🔘' && arr2[guess] == true){
			alert("⛔️ Некорректно! Вы уже стреляли по данной ячейке");
		} else {
			guesses++;
			arr[guess]='🔘';
			arr2[guess]=true;
			var arr3=arr.join('');
			alert("💦 Мимо! 💦 \n " + arr3);
		}
	}
}

var attempts = Math.round(100*(3/guesses));
var stats = "Ты уничтожил корабль за " + guesses + " попыток!\n🎯Точность попаданий: " + attempts + "%";
alert(stats + "\n\n Итог:\n" +arr3);
