from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/app")
def app_page():
    return render_template("index.html")


@app.route("/api/players")
def get_players():
    players = [
        # Top Players
        {"name": "Jannik Sinner", "country": "Italy", "flag": "🇮🇹"},
        {"name": "Carlos Alcaraz", "country": "Spain", "flag": "🇪🇸"},
        {"name": "Alexander Zverev", "country": "Germany", "flag": "🇩🇪"},
        {"name": "Novak Djokovic", "country": "Serbia", "flag": "🇷🇸"},
        {"name": "Daniil Medvedev", "country": "Russia", "flag": "🇷🇺"},
        {"name": "Taylor Fritz", "country": "USA", "flag": "🇺🇸"},
        {"name": "Jack Draper", "country": "Great Britain", "flag": "🇬🇧"},
        {"name": "Alex de Minaur", "country": "Australia", "flag": "🇦🇺"},
        {"name": "Andrey Rublev", "country": "Russia", "flag": "🇷🇺"},
        {"name": "Tommy Paul", "country": "USA", "flag": "🇺🇸"},
        {"name": "Lorenzo Musetti", "country": "Italy", "flag": "🇮🇹"},
        {"name": "Ben Shelton", "country": "USA", "flag": "🇺🇸"},
        {"name": "Holger Rune", "country": "Denmark", "flag": "🇩🇰"},
        {"name": "Casper Ruud", "country": "Norway", "flag": "🇳🇴"},
        {"name": "Karen Khachanov", "country": "Russia", "flag": "🇷🇺"},
        {"name": "Stefanos Tsitsipas", "country": "Greece", "flag": "🇬🇷"},
        {"name": "Frances Tiafoe", "country": "USA", "flag": "🇺🇸"},
        {"name": "Sebastian Korda", "country": "USA", "flag": "🇺🇸"},
        {"name": "Arthur Fils", "country": "France", "flag": "🇫🇷"},
        {"name": "Ugo Humbert", "country": "France", "flag": "🇫🇷"},
        {"name": "Alejandro Davidovich Fokina", "country": "Spain", "flag": "🇪🇸"},
        {"name": "Francisco Cerundolo", "country": "Argentina", "flag": "🇦🇷"},
        {"name": "Alexander Bublik", "country": "Kazakhstan", "flag": "🇰🇿"},
        {"name": "Matteo Berrettini", "country": "Italy", "flag": "🇮🇹"},
        {"name": "Flavio Cobolli", "country": "Italy", "flag": "🇮🇹"},
        {"name": "Jiri Lehecka", "country": "Czech Republic", "flag": "🇨🇿"},
        {"name": "Alex Michelsen", "country": "USA", "flag": "🇺🇸"},
        {"name": "Brandon Nakashima", "country": "USA", "flag": "🇺🇸"},
        {"name": "Tallon Griekspoor", "country": "Netherlands", "flag": "🇳🇱"},
        {"name": "Jan-Lennard Struff", "country": "Germany", "flag": "🇩🇪"},
        {"name": "Nuno Borges", "country": "Portugal", "flag": "🇵🇹"},
        {"name": "Sebastian Baez", "country": "Argentina", "flag": "🇦🇷"},
        {"name": "Tomas Machac", "country": "Czech Republic", "flag": "🇨🇿"},
        {"name": "Luciano Darderi", "country": "Italy", "flag": "🇮🇹"},
        {"name": "Denis Shapovalov", "country": "Canada", "flag": "🇨🇦"},
        {"name": "Jordan Thompson", "country": "Australia", "flag": "🇦🇺"},
        {"name": "Arthur Rinderknech", "country": "France", "flag": "🇫🇷"},
        {"name": "Alexandre Muller", "country": "France", "flag": "🇫🇷"},
        {"name": "Mariano Navone", "country": "Argentina", "flag": "🇦🇷"},
        {"name": "Fabian Marozsan", "country": "Hungary", "flag": "🇭🇺"},
        {"name": "Miomir Kecmanovic", "country": "Serbia", "flag": "🇷🇸"},
        {"name": "Pedro Martinez", "country": "Spain", "flag": "🇪🇸"},
        {"name": "Roberto Bautista Agut", "country": "Spain", "flag": "🇪🇸"},
        {"name": "Gael Monfils", "country": "France", "flag": "🇫🇷"},
        {"name": "Grigor Dimitrov", "country": "Bulgaria", "flag": "🇧🇬"},

        # Famous / Popular Players
        {"name": "Nick Kyrgios", "country": "Australia", "flag": "🇦🇺"},
        {"name": "Rafael Nadal", "country": "Spain", "flag": "🇪🇸"},
        {"name": "Roger Federer", "country": "Switzerland", "flag": "🇨🇭"},
        {"name": "Andy Murray", "country": "Great Britain", "flag": "🇬🇧"},
        {"name": "Stan Wawrinka", "country": "Switzerland", "flag": "🇨🇭"},
        {"name": "Dominic Thiem", "country": "Austria", "flag": "🇦🇹"},
        {"name": "Kei Nishikori", "country": "Japan", "flag": "🇯🇵"},
        {"name": "Marin Cilic", "country": "Croatia", "flag": "🇭🇷"},
        {"name": "Fabio Fognini", "country": "Italy", "flag": "🇮🇹"},
        {"name": "Diego Schwartzman", "country": "Argentina", "flag": "🇦🇷"},
        {"name": "David Goffin", "country": "Belgium", "flag": "🇧🇪"},
        {"name": "Richard Gasquet", "country": "France", "flag": "🇫🇷"},
        {"name": "Lucas Pouille", "country": "France", "flag": "🇫🇷"},
        {"name": "Jo-Wilfried Tsonga", "country": "France", "flag": "🇫🇷"},
        {"name": "Juan Martin Del Potro", "country": "Argentina", "flag": "🇦🇷"}
    ]

    return jsonify(players)


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=8000,
        debug=True
    )

