## 📁 Структура проекта

### `src/` — Исходный код

- `setups/` — Подготовка окружения перед тестами
  - `auth.setup.ts` — Авторизация и установка токенов
  - `patient.setup.ts` — Нахождение пациента и сохранение его данных

- `tests/`
  - `main/` — Основные тесты
    - `prescribe.spec.ts` — Выписка рецепта
    - `verify.spec.ts` — Проверка данных перед подписанием
    - `sign.spec.ts` — Подписание рецепта
    - `issue.spec.ts` — Выдача рецепта в аптеке

- `utils/` — Вспомогательные утилиты
  - `ApiManager.ts` — API-запросы (GET, POST и т.п.)
  - `DateManager.ts` — Работа с датами
  - `PathManager.ts` — Управление путями
  - `FileManager.ts` — Работа с файлами
  - `EnvManager.ts` — Переменные окружения

- `enums/` — Перечисления (enum’ы)
  - `endpoint.enum.ts` — API эндпоинты
  - `http.enum.ts` — HTTP-методы и статусы
  - `prescription.enum.ts` — Типы и статусы рецепта
  - `roles.enum.ts` — Роли (Директор, врач, рецензент и т.п.)

### `.storage/` — Хранилище тестовых данных

- `auth.json` — Данные авторизации  
- `patient.json` — Данные пациента  
- `prescription.json` — Данные рецепта 