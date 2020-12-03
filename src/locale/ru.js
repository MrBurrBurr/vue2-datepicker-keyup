import DatePicker from 'vue2-datepicker-extended';
import ru from 'date-format-parse/lib/locale/ru';

const lang = {
  formatLocale: ru,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ru', lang);

export default lang;
