export function TaskInput() {
    return(
      <div className="m-2 p-2">
              <form className="row">
                <div className="col-10">
                  <h2 className="mb-2.5">Bhumiphat Likittrakulwong</h2>
                  <input
                    className="form-control mb-3 ml-3"
                    type="text"
                    placeholder="Insert a task here.."
                  ></input>
                </div>
                <div className="col-2 mt-5">
                  <button className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
    );
}
