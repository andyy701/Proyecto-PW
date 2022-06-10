function HistoricoConsultas_17() {
  return (
    <div>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom" id="Nav">
          <h1 class="h2">Histórico de Consultas</h1>
          <div class="btn-toolbar mb-2 mb-md-0" id="botones">
            <div class="btn-group me-2">
              <button type="button" class="btn btn-sm btn-outline-secondary">Compartir</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Exportar</button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar" class="align-text-bottom"></span>
              Frecuencia
            </button>
          </div>
        </div>
        <br/>
        <canvas class="my-4 w-100" id="myChart" width="900" height="280"></canvas>
      </main>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

      <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script><script src="dashboard.js"></script>
    </div>
  );
}
export default HistoricoConsultas_17;