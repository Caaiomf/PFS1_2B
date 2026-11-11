const Database = require("../db/database");

const banco = new Database();

class PedidoModel {
    
    #pedidoId;
    #pedidoData;
    #pedidoValorTotal;

    get pedidoId() {
        return this.#pedidoId;
    }
    set pedidoId(value) {
        this.#pedidoId = value;
    }

    get pedidoData() {
        return this.#pedidoData;
    }
    set pedidoData(value) {
        this.#pedidoData = value;
    }

    get pedidoValorTotal() {
        return this.#pedidoValorTotal;
    }
    set pedidoValorTotal(value) {
        this.#pedidoValorTotal = value;
    }

    constructor(id, data, valorTotal) {
        this.#pedidoData = data;
        this.#pedidoId = id;
        this.#pedidoValorTotal = valorTotal;
    }

    async atualizar() {
        let sql = "update tb_pedido set ped_valortotal = ? where ped_id = ?";
        let valores = [this.#pedidoValorTotal, this.#pedidoId];
        let result = await banco.ExecutaComandoNonQuery(sql, valores);

        return result;

    }


    async gravar() {
        let sql = "insert into tb_pedido (ped_data, ped_valortotal) values (?, ?)";
        let valores = [this.#pedidoData, this.#pedidoValorTotal];
        let result = await banco.ExecutaComandoLastInserted(sql, valores);
        if(result) {
            this.#pedidoId = result;
            return true;
        }

        return false;

    }


}

module.exports = PedidoModel;