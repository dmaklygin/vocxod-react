var express = require('express');
var router = express.Router();

var sports = [{"id":55,"name":"HYPERDICE","slug":"poker_dice","group":3,"rating":30},{"id":78,"name":"Австралийский футбол","slug":"aussie_rules","group":2,"rating":405},{"id":50,"name":"Авто-Мотоспорт","slug":"auto_motosport","group":3,"rating":70},{"id":10,"name":"Амер. футбол","slug":"football","group":2,"rating":390},{"id":16,"name":"Бадминтон","slug":"badminton","group":3,"rating":350},{"id":6,"name":"Баскетбол","slug":"basketball","group":1,"rating":450},{"id":21,"name":"Бейсбол","slug":"baseball","group":3,"rating":410},{"id":27,"name":"Биатлон","slug":"biathlon","group":4,"rating":320},{"id":84,"name":"Бильярд","slug":"billiards","group":3,"rating":107},{"id":60,"name":"Бинго","slug":"bingo","group":3,"rating":20},{"id":62,"name":"Бобслей","slug":"bobsled","group":4,"rating":310},{"id":35,"name":"Бои","slug":"fight","group":3,"rating":130},{"id":37,"name":"Бои с возможностью ничьей","slug":"fight_with_draw","group":3,"rating":120},{"id":41,"name":"Бокс","slug":"box","group":3,"rating":330},{"id":49,"name":"Велоспорт","slug":"cicle_racing","group":3,"rating":80},{"id":33,"name":"Водное поло","slug":"water_polo","group":3,"rating":400},{"id":8,"name":"Волейбол","slug":"volleyball","group":1,"rating":440},{"id":25,"name":"Гандбол","slug":"handball","group":2,"rating":420},{"id":83,"name":"Гольф","slug":"golf","group":3,"rating":64},{"id":63,"name":"Горнолыжный спорт","slug":"alpine_skiing","group":4,"rating":300},{"id":85,"name":"Дартс","slug":"darts","group":3,"rating":104},{"id":86,"name":"Киберспорт","slug":"electronic_sport","group":3,"rating":47},{"id":64,"name":"Конькобежный спорт","slug":"skating","group":4,"rating":290},{"id":82,"name":"Крикет","slug":"cricket","group":3,"rating":67},{"id":54,"name":"Крысиные бега","slug":"sport_rats","group":3,"rating":100},{"id":87,"name":"Культура","slug":"culture","group":3,"rating":44},{"id":65,"name":"Кёрлинг","slug":"curling","group":4,"rating":280},{"id":66,"name":"Лыжное двоеборье","slug":"nordic_combined","group":4,"rating":270},{"id":29,"name":"Лыжные гонки","slug":"cross_country_skiing","group":4,"rating":260},{"id":51,"name":"Олимпиада","slug":"olympic_games","group":4,"rating":60},{"id":73,"name":"Паралимпийские горные лыжи","slug":"paralimpic_alpine_skiing","group":5,"rating":180},{"id":75,"name":"Паралимпийские лыжные гонки","slug":"paralimpic_cross_country_skiing","group":5,"rating":160},{"id":74,"name":"Паралимпийский биатлон","slug":"paralimpic_biathlon","group":5,"rating":170},{"id":77,"name":"Паралимпийский керлинг на колясках","slug":"paralimpic_wheelchair_curling","group":5,"rating":140},{"id":76,"name":"Паралимпийский следж-хоккей на льду","slug":"paralimpic_ice_sledge_hockey","group":5,"rating":150},{"id":47,"name":"Петушиные бои","slug":"cockfight","group":3,"rating":90},{"id":14,"name":"Пинг-понг","slug":"table_tennis","group":3,"rating":360},{"id":80,"name":"Пляжный волейбол","slug":"beach_volleyball","group":2,"rating":365},{"id":79,"name":"Пляжный футбол","slug":"beach_soccer","group":2,"rating":367},{"id":61,"name":"Прочие события","slug":"others","group":3,"rating":10},{"id":31,"name":"Прыжки с трамплина","slug":"ski_jumping","group":4,"rating":250},{"id":19,"name":"Регби","slug":"rugby","group":2,"rating":380},{"id":72,"name":"Санный спорт","slug":"luge","group":4,"rating":190},{"id":67,"name":"Скелетон","slug":"skeleton","group":4,"rating":240},{"id":68,"name":"Сноуборд","slug":"snowboard","group":4,"rating":230},{"id":52,"name":"Снукер","slug":"snooker","group":3,"rating":50},{"id":12,"name":"Теннис","slug":"tennis","group":1,"rating":430},{"id":69,"name":"Фигурное катание","slug":"figure_skating","group":4,"rating":220},{"id":53,"name":"Формула-1","slug":"formula1","group":3,"rating":40},{"id":70,"name":"Фристайл","slug":"freestyle","group":4,"rating":210},{"id":2,"name":"Футбол","slug":"soccer","group":1,"rating":470},{"id":43,"name":"Футзал","slug":"futsal","group":3,"rating":340},{"id":4,"name":"Хоккей","slug":"hockey","group":1,"rating":460},{"id":81,"name":"Хоккей на траве","slug":"field_hockey","group":2,"rating":363},{"id":23,"name":"Хоккей с мячом","slug":"ball_hockey","group":2,"rating":370},{"id":39,"name":"Шахматы","slug":"chess","group":3,"rating":110},{"id":71,"name":"Шорт-трек","slug":"short_track","group":4,"rating":200}];

sports.forEach(function (sport) {
  sport.tournaments = [
    {
      id: 1,
      name: 'Test Tournament',
      events: [
        {
          id: 1,
          home: 'Home 1',
          away: 'Away 1'
        }
      ]
    },
    {
      id: 2,
      name: 'Test Tournament 2',
      events: [
        {
          id: 2,
          home: 'Home 2',
          away: 'Away 2'
        }
      ]
    }
  ];
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Sports Line' });
});

router.get('/line', function(req, res) {
  res.render('line', { title: 'Sports Line', sports: sports });
});

router.get('/live', function(req, res) {
  res.render('live', { title: 'Sports Live', sports: sports });
});

module.exports = router;
