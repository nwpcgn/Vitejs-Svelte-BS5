<!-- Tables
      ================================================== -->
<div class="bs-docs-section">
    <div class="row">
        <div class="col-lg-12">
            <div class="page-header">
                <h1 id="tables">Tables</h1>
            </div>
            <div class="bs-component">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Column heading</th>
                            <th scope="col">Column heading</th>
                            <th scope="col">Column heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-active">
                            <th scope="row">Active</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr>
                            <th scope="row">Default</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr class="table-primary">
                            <th scope="row">Primary</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr class="table-secondary">
                            <th scope="row">Secondary</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr class="table-success">
                            <th scope="row">Success</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr class="table-danger">
                            <th scope="row">Danger</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr class="table-warning">
                            <th scope="row">Warning</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr class="table-info">
                            <th scope="row">Info</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr class="table-light">
                            <th scope="row">Light</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr class="table-dark">
                            <th scope="row">Dark</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- /example -->
        </div>
    </div>
</div>
<!-- Forms
      ================================================== -->
<div class="bs-docs-section">
    <div class="row">
        <div class="col-lg-12">
            <div class="page-header">
                <h1 id="forms">Forms</h1>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <div class="bs-component">
                <form>
                    <fieldset>
                        <legend>Legend</legend>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off" />
                        </div>
                        <div class="form-group">
                            <label for="exampleSelect1" class="form-label mt-4">Example select</label>
                            <select class="form-select" id="exampleSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleSelect1" class="form-label mt-4">Example disabled select</label>
                            <select class="form-select" id="exampleDisabledSelect1" disabled>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleSelect2" class="form-label mt-4">Example multiple select</label>
                            <select multiple class="form-select" id="exampleSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Example textarea</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3" /> </div>
						<div class="form-group">
							<label for="formFile" class="form-label mt-4"
								>Default file input example</label>
							<input class="form-control" type="file" id="formFile" />
						</div>
						<fieldset class="form-group">
							<legend class="mt-4">Radio buttons</legend>
							<div class="form-check">
								<input
									class="form-check-input"
									type="radio"
									name="optionsRadios"
									id="optionsRadios1"
									value="option1"
									checked />
								<label class="form-check-label" for="optionsRadios1">
									Option one is this and that&mdash;be sure to include why it's
									great
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input"
									type="radio"
									name="optionsRadios"
									id="optionsRadios2"
									value="option2" />
								<label class="form-check-label" for="optionsRadios2">
									Option two can be something else and selecting it will
									deselect option one
								</label>
							</div>
							<div class="form-check disabled">
								<input
									class="form-check-input"
									type="radio"
									name="optionsRadios"
									id="optionsRadios3"
									value="option3"
									disabled />
								<label class="form-check-label" for="optionsRadios3">
									Option three is disabled
								</label>
							</div>
						</fieldset>
						<fieldset class="form-group">
							<legend class="mt-4">Checkboxes</legend>
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault" />
								<label class="form-check-label" for="flexCheckDefault">
									Default checkbox
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckChecked"
									checked />
								<label class="form-check-label" for="flexCheckChecked">
									Checked checkbox
								</label>
							</div>
						</fieldset>
						<fieldset class="form-group">
							<legend class="mt-4">Switches</legend>
							<div class="form-check form-switch">
								<input
									class="form-check-input"
									type="checkbox"
									id="flexSwitchCheckDefault" />
								<label class="form-check-label" for="flexSwitchCheckDefault"
									>Default switch checkbox input</label>
							</div>
							<div class="form-check form-switch">
								<input
									class="form-check-input"
									type="checkbox"
									id="flexSwitchCheckChecked"
									checked />
								<label class="form-check-label" for="flexSwitchCheckChecked"
									>Checked switch checkbox input</label>
							</div>
						</fieldset>
						<fieldset class="form-group">
							<legend class="mt-4">Ranges</legend>
							<label for="customRange1" class="form-label">Example range</label>
							<input type="range" class="form-range" id="customRange1" />
							<label for="disabledRange" class="form-label"
								>Disabled range</label>
							<input
								type="range"
								class="form-range"
								id="disabledRange"
								disabled />
							<label for="customRange3" class="form-label">Example range</label>
							<input
								type="range"
								class="form-range"
								min="0"
								max="5"
								step="0.5"
								id="customRange3" />
						</fieldset>
						<button type="submit" class="btn btn-primary">Submit</button>
					</fieldset>
				</form>
			</div>
		</div>
		<div class="col-lg-4 offset-lg-1">
			<form class="bs-component">
				<div class="form-group">
					<fieldset disabled>
						<label class="form-label" for="disabledInput">Disabled input</label>
						<input
							class="form-control"
							id="disabledInput"
							type="text"
							placeholder="Disabled input here..."
							disabled />
					</fieldset>
				</div>

				<div class="form-group">
					<fieldset>
						<label class="form-label mt-4" for="readOnlyInput"
							>Readonly input</label>
						<input
							class="form-control"
							id="readOnlyInput"
							type="text"
							placeholder="Readonly input here..."
							readonly />
					</fieldset>
				</div>

				<div class="form-group has-success">
					<label class="form-label mt-4" for="inputValid">Valid input</label>
					<input
						type="text"
						value="correct value"
						class="form-control is-valid"
						id="inputValid" />
					<div class="valid-feedback">Success! You've done it.</div>
				</div>

				<div class="form-group has-danger">
					<label class="form-label mt-4" for="inputInvalid"
						>Invalid input</label>
					<input
						type="text"
						value="wrong value"
						class="form-control is-invalid"
						id="inputInvalid" />
					<div class="invalid-feedback">
						Sorry, that username's taken. Try another?
					</div>
				</div>

				<div class="form-group">
					<label class="col-form-label col-form-label-lg mt-4" for="inputLarge"
						>Large input</label>
					<input
						class="form-control form-control-lg"
						type="text"
						placeholder=".form-control-lg"
						id="inputLarge" />
				</div>

				<div class="form-group">
					<label class="col-form-label mt-4" for="inputDefault"
						>Default input</label>
					<input
						type="text"
						class="form-control"
						placeholder="Default input"
						id="inputDefault" />
				</div>

				<div class="form-group">
					<label class="col-form-label col-form-label-sm mt-4" for="inputSmall"
						>Small input</label>
					<input
						class="form-control form-control-sm"
						type="text"
						placeholder=".form-control-sm"
						id="inputSmall" />
				</div>

				<div class="form-group">
					<label class="form-label mt-4">Input addons</label>
					<div class="form-group">
						<div class="input-group mb-3">
							<span class="input-group-text">$</span>
							<input
								type="text"
								class="form-control"
								aria-label="Amount (to the nearest dollar)" />
							<span class="input-group-text">.00</span>
						</div>
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control"
								placeholder="Recipient's username"
								aria-label="Recipient's username"
								aria-describedby="button-addon2" />
							<button class="btn btn-primary" type="button" id="button-addon2"
								>Button</button>
						</div>
					</div>
				</div>

				<div class="form-group">
					<label class="form-label mt-4">Floating labels</label>
					<div class="form-floating mb-3">
						<input
							type="email"
							class="form-control"
							id="floatingInput"
							placeholder="name@example.com" />
						<label for="floatingInput">Email address</label>
					</div>
					<div class="form-floating">
						<input
							type="password"
							class="form-control"
							id="floatingPassword"
							placeholder="Password"
							autocomplete="off" />
						<label for="floatingPassword">Password</label>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>

<!-- Navs
      ================================================== -->
<div class="bs-docs-section">
	<div class="row">
		<div class="col-lg-12">
			<div class="page-header">
				<h1 id="navs">Navs</h1>
			</div>
		</div>
	</div>

	<div class="row mb-5">
		<div class="col-lg-6">
			<h2 id="nav-tabs">Tabs</h2>
			<div class="bs-component">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a class="nav-link active" data-bs-toggle="tab" href="#home"
							>Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-bs-toggle="tab" href="#profile">Profile</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#">Disabled</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="true"
							aria-expanded="false">Dropdown</a>
						<div class="dropdown-menu">
							<h6 class="dropdown-header">Dropdown header</h6>
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<a class="dropdown-item" href="#">Something else here</a>
							<div class="dropdown-divider" />
							<a class="dropdown-item" href="#">Separated link</a>
						</div>
					</li>
				</ul>
				<div id="myTabContent" class="tab-content">
					<div class="tab-pane fade show active" id="home">
						<p>
							Raw denim you probably haven't heard of them jean shorts Austin.
							Nesciunt tofu stumptown aliqua, retro synth master cleanse.
							Mustache cliche tempor, williamsburg carles vegan helvetica.
							Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
							sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
							placeat salvia cillum iphone. Seitan aliquip quis cardigan
							american apparel, butcher voluptate nisi qui.
						</p>
					</div>
					<div class="tab-pane fade" id="profile">
						<p>
							Food truck fixie locavore, accusamus mcsweeney's marfa nulla
							single-origin coffee squid. Exercitation +1 labore velit, blog
							sartorial PBR leggings next level wes anderson artisan four loko
							farm-to-table craft beer twee. Qui photo booth letterpress,
							commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
							vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic
							magna delectus mollit.
						</p>
					</div>
					<div class="tab-pane fade" id="dropdown1">
						<p>
							Etsy mixtape wayfarers, ethical wes anderson tofu before they sold
							out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
							readymade. Messenger bag gentrify pitchfork tattooed craft beer,
							iphone skateboard locavore carles etsy salvia banksy hoodie
							helvetica. DIY synth PBR banksy irony. Leggings gentrify squid
							8-bit cred pitchfork.
						</p>
					</div>
					<div class="tab-pane fade" id="dropdown2">
						<p>
							Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art
							party before they sold out master cleanse gluten-free squid
							scenester freegan cosby sweater. Fanny pack portland seitan DIY,
							art party locavore wolf cliche high life echo park Austin. Cred
							vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
							farm-to-table VHS viral locavore cosby sweater.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="col-lg-6">
			<h2 id="nav-pills">Pills</h2>
			<div class="bs-component">
				<ul class="nav nav-pills">
					<li class="nav-item">
						<a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="true"
							aria-expanded="false">Dropdown</a>
						<div class="dropdown-menu">
							<h6 class="dropdown-header">Dropdown header</h6>
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<a class="dropdown-item" href="#">Something else here</a>
							<div class="dropdown-divider" />
							<a class="dropdown-item" href="#">Separated link</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#">Disabled</a>
					</li>
				</ul>
			</div>
			<br />
			<div class="bs-component">
				<ul class="nav nav-pills flex-column">
					<li class="nav-item">
						<a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="true"
							aria-expanded="false">Dropdown</a>
						<div class="dropdown-menu">
							<h6 class="dropdown-header">Dropdown header</h6>
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<a class="dropdown-item" href="#">Something else here</a>
							<div class="dropdown-divider" />
							<a class="dropdown-item" href="#">Separated link</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#">Disabled</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-lg-6">
			<h2 id="nav-breadcrumbs">Breadcrumbs</h2>
			<div class="bs-component">
				<ol class="breadcrumb">
					<li class="breadcrumb-item active">Home</li>
				</ol>
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#">Home</a></li>
					<li class="breadcrumb-item active">Library</li>
				</ol>
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#">Home</a></li>
					<li class="breadcrumb-item"><a href="#">Library</a></li>
					<li class="breadcrumb-item active">Data</li>
				</ol>
			</div>
		</div>

		<div class="col-lg-6">
			<h2 id="pagination">Pagination</h2>
			<div class="bs-component">
				<div>
					<ul class="pagination">
						<li class="page-item disabled">
							<a class="page-link" href="#">&laquo;</a>
						</li>
						<li class="page-item active">
							<a class="page-link" href="#">1</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">2</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">3</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">4</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">5</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">&raquo;</a>
						</li>
					</ul>
				</div>

				<div>
					<ul class="pagination pagination-lg">
						<li class="page-item disabled">
							<a class="page-link" href="#">&laquo;</a>
						</li>
						<li class="page-item active">
							<a class="page-link" href="#">1</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">2</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">3</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">4</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">5</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">&raquo;</a>
						</li>
					</ul>
				</div>

				<div>
					<ul class="pagination pagination-sm">
						<li class="page-item disabled">
							<a class="page-link" href="#">&laquo;</a>
						</li>
						<li class="page-item active">
							<a class="page-link" href="#">1</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">2</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">3</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">4</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">5</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">&raquo;</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Indicators
      ================================================== -->
<div class="bs-docs-section">
	<div class="row">
		<div class="col-lg-12">
			<div class="page-header">
				<h1 id="indicators">Indicators</h1>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-lg-12">
			<h2>Alerts</h2>
			<div class="bs-component">
				<div class="alert alert-dismissible alert-warning">
					<button type="button" class="btn-close" data-bs-dismiss="alert" />
					<h4 class="alert-heading">Warning!</h4>
					<p class="mb-0">
						Best check yo self, you're not looking too good. Nulla vitae elit
						libero, a pharetra augue. Praesent commodo cursus magna, <a
							href="#"
							class="alert-link">vel scelerisque nisl consectetur et</a
						>.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<div class="bs-component">
				<div class="alert alert-dismissible alert-danger">
					<button type="button" class="btn-close" data-bs-dismiss="alert" />
					<strong>Oh snap!</strong>
					<a href="#" class="alert-link">Change a few things up</a> and try submitting
					again.
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="bs-component">
				<div class="alert alert-dismissible alert-success">
					<button type="button" class="btn-close" data-bs-dismiss="alert" />
					<strong>Well done!</strong> You successfully read
					<a href="#" class="alert-link">this important alert message</a>.
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="bs-component">
				<div class="alert alert-dismissible alert-info">
					<button type="button" class="btn-close" data-bs-dismiss="alert" />
					<strong>Heads up!</strong> This
					<a href="#" class="alert-link">alert needs your attention</a>, but
					it's not super important.
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<div class="bs-component">
				<div class="alert alert-dismissible alert-primary">
					<button type="button" class="btn-close" data-bs-dismiss="alert" />
					<strong>Oh snap!</strong>
					<a href="#" class="alert-link">Change a few things up</a> and try submitting
					again.
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="bs-component">
				<div class="alert alert-dismissible alert-secondary">
					<button type="button" class="btn-close" data-bs-dismiss="alert" />
					<strong>Well done!</strong> You successfully read
					<a href="#" class="alert-link">this important alert message</a>.
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="bs-component">
				<div class="alert alert-dismissible alert-light">
					<button type="button" class="btn-close" data-bs-dismiss="alert" />
					<strong>Heads up!</strong> This
					<a href="#" class="alert-link">alert needs your attention</a>, but
					it's not super important.
				</div>
			</div>
		</div>
	</div>
	<div>
		<h2>Badges</h2>
		<div class="bs-component mb-4">
			<span class="badge bg-primary">Primary</span>
			<span class="badge bg-secondary">Secondary</span>
			<span class="badge bg-success">Success</span>
			<span class="badge bg-danger">Danger</span>
			<span class="badge bg-warning">Warning</span>
			<span class="badge bg-info">Info</span>
			<span class="badge bg-light">Light</span>
			<span class="badge bg-dark">Dark</span>
		</div>
		<div class="bs-component">
			<span class="badge rounded-pill bg-primary">Primary</span>
			<span class="badge rounded-pill bg-secondary">Secondary</span>
			<span class="badge rounded-pill bg-success">Success</span>
			<span class="badge rounded-pill bg-danger">Danger</span>
			<span class="badge rounded-pill bg-warning">Warning</span>
			<span class="badge rounded-pill bg-info">Info</span>
			<span class="badge rounded-pill bg-light">Light</span>
			<span class="badge rounded-pill bg-dark">Dark</span>
		</div>
	</div>
</div>

<!-- Progress
      ================================================== -->
<div class="bs-docs-section">
	<div class="row">
		<div class="col-lg-12">
			<div class="page-header">
				<h1 id="progress">Progress</h1>
			</div>

			<h3 id="progress-basic">Basic</h3>
			<div class="bs-component">
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style="width: 25%;"
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
			</div>

			<h3 id="progress-alternatives">Contextual alternatives</h3>
			<div class="bs-component">
				<div class="progress">
					<div
						class="progress-bar bg-success"
						role="progressbar"
						style="width: 25%;"
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
				<div class="progress">
					<div
						class="progress-bar bg-info"
						role="progressbar"
						style="width: 50%;"
						aria-valuenow="50"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
				<div class="progress">
					<div
						class="progress-bar bg-warning"
						role="progressbar"
						style="width: 75%;"
						aria-valuenow="75"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
				<div class="progress">
					<div
						class="progress-bar bg-danger"
						role="progressbar"
						style="width: 100%;"
						aria-valuenow="100"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
			</div>

			<h3 id="progress-multiple">Multiple bars</h3>
			<div class="bs-component">
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style="width: 15%;"
						aria-valuenow="15"
						aria-valuemin="0"
						aria-valuemax="100" />
					<div
						class="progress-bar bg-success"
						role="progressbar"
						style="width: 30%;"
						aria-valuenow="30"
						aria-valuemin="0"
						aria-valuemax="100" />
					<div
						class="progress-bar bg-info"
						role="progressbar"
						style="width: 20%;"
						aria-valuenow="20"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
			</div>

			<h3 id="progress-striped">Striped</h3>
			<div class="bs-component">
				<div class="progress">
					<div
						class="progress-bar progress-bar-striped"
						role="progressbar"
						style="width: 10%;"
						aria-valuenow="10"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
				<div class="progress">
					<div
						class="progress-bar progress-bar-striped bg-success"
						role="progressbar"
						style="width: 25%;"
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
				<div class="progress">
					<div
						class="progress-bar progress-bar-striped bg-info"
						role="progressbar"
						style="width: 50%;"
						aria-valuenow="50"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
				<div class="progress">
					<div
						class="progress-bar progress-bar-striped bg-warning"
						role="progressbar"
						style="width: 75%;"
						aria-valuenow="75"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
				<div class="progress">
					<div
						class="progress-bar progress-bar-striped bg-danger"
						role="progressbar"
						style="width: 100%;"
						aria-valuenow="100"
						aria-valuemin="0"
						aria-valuemax="100" />
				</div>
			</div>

			<h3 id="progress-animated">Animated</h3>
			<div class="bs-component">
				<div class="progress">
					<div
						class="progress-bar progress-bar-striped progress-bar-animated"
						role="progressbar"
						aria-valuenow="75"
						aria-valuemin="0"
						aria-valuemax="100"
						style="width: 75%;" />
				</div>
			</div>
		</div>
	</div>
</div>


<!-- Dialogs
      ================================================== -->
<div class="bs-docs-section">
	<div class="row">
		<div class="col-lg-12">
			<div class="page-header">
				<h1 id="dialogs">Dialogs</h1>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-6">
			<h2>Modals</h2>
			<div class="bs-component">
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">
  Modal
</button>
			</div>
			<h2>Offcanvas</h2>
			<div class="bs-component">
				<a
					class="btn btn-primary"
					data-bs-toggle="offcanvas"
					href="#offcanvasExample"
					role="button"
					aria-controls="offcanvasExample">
					Link with href
				</a>
				<button
					class="btn btn-primary"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasExample"
					aria-controls="offcanvasExample">
					Button with data-bs-target
				</button>

				<div
					class="offcanvas offcanvas-start"
					tabindex="-1"
					id="offcanvasExample"
					aria-labelledby="offcanvasExampleLabel">
					<div class="offcanvas-header">
						<h5 class="offcanvas-title" id="offcanvasExampleLabel">
							Offcanvas
						</h5>
						<button
							type="button"
							class="btn-close text-reset"
							data-bs-dismiss="offcanvas"
							aria-label="Close" />
					</div>
					<div class="offcanvas-body">
						<div>
							Some text as placeholder. In real life you can have the elements
							you have chosen. Like, text, images, lists, etc.
						</div>
						<div class="dropdown mt-3">
							<button
								class="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-bs-toggle="dropdown">
								Dropdown button
							</button>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li>
									<a class="dropdown-item" href="#">Something else here</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-6">

			<h2>Toasts</h2>
			<div class="bs-component">
				<div
					class="toast show"
					role="alert"
					aria-live="assertive"
					aria-atomic="true">
					<div class="toast-header">
						<strong class="me-auto">Bootstrap</strong>
						<small>11 mins ago</small>
						<button
							type="button"
							class="btn-close ms-2 mb-1"
							data-bs-dismiss="toast"
							aria-label="Close">
							<span aria-hidden="true" />
						</button>
					</div>
					<div class="toast-body">Hello, world! This is a toast message.</div>
				</div>
			</div>
		</div>
	</div>
</div>



<div class="modal fade" id="modal1" tabindex="-1">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Modal title</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true" />
								</button>
							</div>
							<div class="modal-body">
								<p>Modal body text goes here.</p>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-primary"
									>Save changes</button>
								<button
									type="button"
									class="btn btn-secondary"
									data-bs-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>