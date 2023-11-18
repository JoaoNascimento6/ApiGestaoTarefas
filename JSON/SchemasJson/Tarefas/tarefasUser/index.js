{
    "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
            "properties": {
        "tarefasUser": {
            "type": "object",
                "properties": {
                "userId": { "type": "string" },
                "listaTarefas": {
                    "type": "array",
                        "minItems": 0,
                            "uniqueItems": true,
                                "items": {
                        "type": "object",
                            "properties": {
                            "tarefaId": { "type": "string" }
                        },
                        "required": ["tarefaId"]
                    }
                }
            }
        }
    }
}