const { people } = require('../data'); // Import people from data

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' });
    }
    return res.status(201).send({ success: true, data: [...people, name] });
}

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${id}` });
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });

    res.status(200).json({ success: true, data: newPeople });
}

const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${id}` });
    }

    const newPeople = people.filter((person) => person.id !== Number(id));
    return res.status(200).json({ success: true, data: newPeople });
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(201).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ success: true, person: name })
}

module.exports = {
    getPeople,
    createPersonPostman,
    updatePerson,
    deletePerson,
    createPerson
}
