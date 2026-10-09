// Embedded question bank (supports offline file:/// and static servers)
let questions = [
  {
    "id": 1,
    "subject": "programming",
    "label": "Programming",
    "type": "multiple-choice",
    "title": "Which data structure follows the First-In, First-Out (FIFO) principle?",
    "options": [
      "Stack",
      "Queue",
      "Tree",
      "Graph"
    ],
    "answer": 1,
    "explanation": "A queue removes items in the same order they were added: first in, first out."
  },
  {
    "id": 4,
    "subject": "programming",
    "label": "Programming",
    "type": "code-fill",
    "title": "Complete the function so it returns the sum of two numbers.",
    "explanation": "The return statement sends the calculated value back to the caller.",
    "code": [
      [
        {
          "text": "function add(a, b) {"
        }
      ],
      [
        {
          "text": "  return ",
          "className": "code-keyword"
        },
        {
          "blank": "a",
          "aria": "first value"
        },
        {
          "text": " + "
        },
        {
          "blank": "b",
          "aria": "second value"
        },
        {
          "text": ";"
        }
      ],
      [
        {
          "text": "}"
        }
      ]
    ]
  },
  {
    "id": 6,
    "subject": "programming",
    "label": "Programming",
    "type": "code-fill",
    "title": "Fill in the missing array method to create a new array of doubled values.",
    "explanation": "map() transforms every item and returns a new array without changing the original.",
    "code": [
      [
        {
          "text": "const doubled = numbers."
        },
        {
          "blank": "map",
          "aria": "array method"
        },
        {
          "text": "(number => number * 2);"
        }
      ]
    ]
  },
  {
    "id": 9,
    "subject": "programming",
    "label": "Programming",
    "type": "code-fill",
    "title": "Complete the conditional to log a message when a user is signed in.",
    "explanation": "An if statement runs its block only when its condition is truthy.",
    "code": [
      [
        {
          "text": "if (user."
        },
        {
          "blank": "isSignedIn",
          "aria": "user property"
        },
        {
          "text": ") {"
        }
      ],
      [
        {
          "text": "  console.log(\"Welcome back!\");"
        }
      ],
      [
        {
          "text": "}"
        }
      ]
    ]
  },
  {
    "id": 2,
    "subject": "web",
    "label": "Web development",
    "type": "multiple-choice",
    "title": "Which HTML element is used for the largest page heading?",
    "options": [
      "<heading>",
      "<head>",
      "<h6>",
      "<h1>"
    ],
    "answer": 3,
    "explanation": "<h1> is the highest-level heading element in HTML."
  },
  {
    "id": 5,
    "subject": "web",
    "label": "Web development",
    "type": "multiple-choice",
    "title": "Which CSS property changes the space inside an element's border?",
    "options": [
      "margin",
      "padding",
      "gap",
      "spacing"
    ],
    "answer": 1,
    "explanation": "Padding creates inner space between an element's content and its border."
  },
  {
    "id": 8,
    "subject": "web",
    "label": "Web development",
    "type": "multiple-choice",
    "title": "What does responsive design allow a page to do?",
    "options": [
      "Load only on phones",
      "Adapt its layout to different screen sizes",
      "Use only one font",
      "Prevent all scrolling"
    ],
    "answer": 1,
    "explanation": "Responsive layouts adjust to the available viewport, from phones to large screens."
  },
  {
    "id": 3,
    "subject": "design",
    "label": "Design principles",
    "type": "multiple-choice",
    "title": "What does visual hierarchy help a reader understand?",
    "options": [
      "The order and importance of information",
      "The file size of an image",
      "The speed of a website",
      "The number of colors used"
    ],
    "answer": 0,
    "explanation": "Hierarchy guides attention by making the relationships and priority of content clear."
  },
  {
    "id": 7,
    "subject": "design",
    "label": "Design principles",
    "type": "multiple-choice",
    "title": "Which pairing usually creates the strongest contrast?",
    "options": [
      "Light gray on white",
      "Dark text on a light background",
      "Yellow on white",
      "Blue on purple"
    ],
    "answer": 1,
    "explanation": "Dark text against a light background generally provides clear, accessible contrast."
  },
  {
    "id": 10,
    "subject": "design",
    "label": "Design principles",
    "type": "multiple-choice",
    "title": "Why should related items be placed near one another?",
    "options": [
      "To use more whitespace",
      "To communicate grouping and relationship",
      "To make text smaller",
      "To hide navigation"
    ],
    "answer": 1,
    "explanation": "Proximity helps users recognize which pieces of information belong together."
  },
  {
    "id": 1001,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multiple-choice",
    "title": "In the Iris linear-regression notebook, which variable is used to predict petal width?",
    "options": [
      "petal_length",
      "sepal_length",
      "sepal_width",
      "species"
    ],
    "answer": 0,
    "explanation": "The notebook assigns X = iris[['petal_length']] and y = iris[['petal_width']]."
  },
  {
    "id": 1002,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multiple-choice",
    "title": "Which import used in the notebook correctly provides LinearRegression?",
    "options": [
      "from sklearn.linear_model import LinearRegression",
      "from sklearn.model_selection import LinearRegression",
      "from sklearn.preprocessing import LinearRegression",
      "from sklearn.metrics import LinearRegression"
    ],
    "answer": 0,
    "explanation": "LinearRegression is imported from sklearn.linear_model."
  },
  {
    "id": 1003,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multiple-choice",
    "title": "What proportion of the Iris data is assigned to the test set in the first linear-regression example?",
    "options": [
      "20%",
      "30%",
      "40%",
      "60%"
    ],
    "answer": 2,
    "explanation": "The call uses test_size=0.4, so 40% is reserved for testing."
  },
  {
    "id": 1004,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multiple-choice",
    "title": "What does reshape(-1, 1) do to X_train in the notebook?",
    "options": [
      "Creates a one-row array",
      "Creates a 2D column vector",
      "Removes missing values",
      "Sorts the observations"
    ],
    "answer": 1,
    "explanation": "The notebook comment says -1 infers the number of rows and 1 creates one column."
  },
  {
    "id": 1005,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multiple-choice",
    "title": "Which attribute stores the fitted linear model's intercept?",
    "options": [
      "lr.coef_",
      "lr.intercept_",
      "lr.score_",
      "lr.slope_"
    ],
    "answer": 1,
    "explanation": "The notebook assigns c = lr.intercept_."
  },
  {
    "id": 1006,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multiple-choice",
    "title": "Which attribute stores the fitted model coefficients?",
    "options": [
      "lr.intercept_",
      "lr.predict_",
      "lr.coef_",
      "lr.params_"
    ],
    "answer": 2,
    "explanation": "The notebook assigns m = lr.coef_."
  },
  {
    "id": 1007,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multiple-choice",
    "title": "Which function evaluates R-squared in the notebook?",
    "options": [
      "accuracy_score",
      "mean_squared_error",
      "r2_score",
      "recall_score"
    ],
    "answer": 2,
    "explanation": "The code imports r2_score from sklearn.metrics."
  },
  {
    "id": 1008,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multiple-choice",
    "title": "In the multiple linear-regression example, what is the target variable?",
    "options": [
      "sepal_length",
      "sepal_width",
      "petal_length",
      "petal_width"
    ],
    "answer": 0,
    "explanation": "The example assigns y = iris['sepal_length']."
  },
  {
    "id": 1009,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multiple-choice",
    "title": "Which set contains all three predictors used in the multiple linear-regression example?",
    "options": [
      "sepal_width, petal_length, petal_width",
      "sepal_length, petal_length, species",
      "sepal_length, sepal_width, species",
      "petal_length, petal_width, species"
    ],
    "answer": 0,
    "explanation": "X contains sepal_width, petal_length, and petal_width."
  },
  {
    "id": 1010,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multiple-choice",
    "title": "What is the purpose of lr.predict(X_test) in the notebook?",
    "options": [
      "Fit the model again",
      "Generate target estimates for test features",
      "Split the dataset",
      "Calculate feature means"
    ],
    "answer": 1,
    "explanation": "predict applies the fitted model to X_test to produce estimated targets."
  },
  {
    "id": 1011,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "Which outcome structure calls for binary logistic regression?",
    "options": [
      "Exactly two possible classes",
      "Three unordered classes",
      "Four ordered levels",
      "A continuous target"
    ],
    "answer": 0,
    "explanation": "The notes define binary logistic regression as having dichotomous outcomes such as yes/no or 0/1."
  },
  {
    "id": 1012,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "Which function maps any real-valued input to a value between 0 and 1?",
    "options": [
      "Softmax only",
      "Sigmoid",
      "R-squared",
      "Gaussian density only"
    ],
    "answer": 1,
    "explanation": "The logistic function is the sigmoid, an S-shaped mapping into the interval between 0 and 1."
  },
  {
    "id": 1013,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "According to the plotted threshold rule in the materials, a predicted value greater than 0.5 is assigned to which class?",
    "options": [
      "-1",
      "0",
      "1",
      "The mean class"
    ],
    "answer": 2,
    "explanation": "The notes and notebook comments use values above 0.5 for class 1 and otherwise class 0."
  },
  {
    "id": 1014,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "Which import correctly provides train_test_split?",
    "options": [
      "from sklearn.model_processor import train_test_split",
      "from sklearn.model_selection import train_test_split",
      "from sklearn.preprocessing import train_test_split",
      "from sklearn.linear_model import train_test_split"
    ],
    "answer": 1,
    "explanation": "train_test_split comes from sklearn.model_selection; sklearn.model_processor is not the module used."
  },
  {
    "id": 1015,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "In the insurance example, what is the single predictor before scaling?",
    "options": [
      "bought_insurance",
      "age",
      "threshold",
      "insurance_data"
    ],
    "answer": 1,
    "explanation": "The notebook assigns X = df[['age']]."
  },
  {
    "id": 1016,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "What is the target in the insurance example?",
    "options": [
      "age",
      "scaled_age",
      "bought_insurance",
      "x_value"
    ],
    "answer": 2,
    "explanation": "The notebook assigns y = df.bought_insurance."
  },
  {
    "id": 1017,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "Which method trains the logistic-regression model?",
    "options": [
      "log_reg.transform(X_train)",
      "log_reg.fit(X_train, y_train)",
      "log_reg.score(X_train, y_train)",
      "log_reg.predict(X_train)"
    ],
    "answer": 1,
    "explanation": "fit trains the model using training features and labels."
  },
  {
    "id": 1018,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "What does log_reg.score(X_test, y_test) measure for this classifier?",
    "options": [
      "Classification accuracy on the test set",
      "The number of input features",
      "Only recall",
      "The fitted intercept"
    ],
    "answer": 0,
    "explanation": "For LogisticRegression, score returns mean classification accuracy."
  },
  {
    "id": 1019,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "Why is x_new converted back to a DataFrame after scaling in the insurance notebook?",
    "options": [
      "To add another observation",
      "To avoid a warning about invalid feature names",
      "To retrain StandardScaler",
      "To change the class threshold"
    ],
    "answer": 1,
    "explanation": "The notebook comment explicitly says the conversion avoids the warning that X lacks valid feature names."
  },
  {
    "id": 1020,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "Which dataset loader is used in the breast-cancer logistic-regression notebooks?",
    "options": [
      "load_iris",
      "load_diabetes",
      "load_breast_cancer",
      "load_wine"
    ],
    "answer": 2,
    "explanation": "Both notebooks import and call load_breast_cancer()."
  },
  {
    "id": 1021,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "What is the test size in the breast-cancer train/test split?",
    "options": [
      "0.2",
      "0.25",
      "0.3",
      "0.4"
    ],
    "answer": 2,
    "explanation": "The notebooks use test_size=0.3."
  },
  {
    "id": 1022,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "Which statement best describes multinomial logistic regression?",
    "options": [
      "It predicts a continuous value",
      "It handles more than two discrete outcome classes",
      "It requires binary features",
      "It only handles ordered classes"
    ],
    "answer": 1,
    "explanation": "The notes define it for categorical dependent variables with more than two outcomes."
  },
  {
    "id": 1023,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "Which case is ordinal rather than multinomial?",
    "options": [
      "Transport mode: car, train, bus, bike",
      "Pet food: wet, dry, junk",
      "Performance: poor, average, good",
      "Flower species: setosa, versicolor, virginica"
    ],
    "answer": 2,
    "explanation": "Poor, average, and good have a natural order, so they are ordinal."
  },
  {
    "id": 1024,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multiple-choice",
    "title": "Which class-probability mechanism is described for ordinal logistic regression?",
    "options": [
      "Independent Gaussian densities",
      "Cumulative logistic functions with thresholds",
      "A single unbounded linear line",
      "Word-count likelihoods"
    ],
    "answer": 1,
    "explanation": "The softmax notes describe cumulative logits based on sigmoid functions and cut points."
  },
  {
    "id": 1025,
    "subject": "softmax",
    "label": "Softmax",
    "type": "multiple-choice",
    "title": "What does softmax convert into class probabilities?",
    "options": [
      "Feature names",
      "Logits or scores",
      "Confusion matrices",
      "Class labels"
    ],
    "answer": 1,
    "explanation": "Softmax converts the model's class scores, also called logits, into probabilities."
  },
  {
    "id": 1026,
    "subject": "softmax",
    "label": "Softmax",
    "type": "multiple-choice",
    "title": "For scores z = [2.5, 1.2, 0.3], which class is predicted in the notes?",
    "options": [
      "Setosa",
      "Versicolor",
      "Virginica",
      "A tie is reported"
    ],
    "answer": 0,
    "explanation": "The shown softmax probabilities are approximately [0.723, 0.197, 0.080], so Setosa has the maximum."
  },
  {
    "id": 1027,
    "subject": "softmax",
    "label": "Softmax",
    "type": "multiple-choice",
    "title": "Which operation selects the predicted class from softmax probabilities?",
    "options": [
      "argmin",
      "mean",
      "argmax",
      "variance"
    ],
    "answer": 2,
    "explanation": "The predicted class is the one at the maximum probability, selected by argmax."
  },
  {
    "id": 1028,
    "subject": "softmax",
    "label": "Softmax",
    "type": "multiple-choice",
    "title": "The probabilities produced by softmax across all classes sum to what value?",
    "options": [
      "0",
      "0.5",
      "1",
      "The number of classes"
    ],
    "answer": 2,
    "explanation": "Softmax normalizes exponentiated logits so the class probabilities sum to 1."
  },
  {
    "id": 1029,
    "subject": "softmax",
    "label": "Softmax",
    "type": "multiple-choice",
    "title": "In the ordinal example, how is P(Y=3) obtained?",
    "options": [
      "P(Y<=3) + P(Y<=2)",
      "P(Y<=3) - P(Y<=2)",
      "1 - P(Y<=3)",
      "P(Y<=2) - P(Y<=1)"
    ],
    "answer": 1,
    "explanation": "An individual middle-class probability is the difference between adjacent cumulative probabilities."
  },
  {
    "id": 1030,
    "subject": "softmax",
    "label": "Softmax",
    "type": "multiple-choice",
    "title": "If probabilities are [0.10, 0.40, 0.40, 0.10] and the implementation returns the first maximum, what is predicted?",
    "options": [
      "Low",
      "Medium",
      "High",
      "Very High"
    ],
    "answer": 1,
    "explanation": "The first maximum occurs at Medium."
  },
  {
    "id": 1031,
    "subject": "softmax",
    "label": "Softmax",
    "type": "multiple-choice",
    "title": "Why can a displayed tie disappear when full precision is considered?",
    "options": [
      "Probabilities are always integers",
      "Rounded values may hide a small difference",
      "Softmax removes all ties",
      "Ordinal classes cannot tie"
    ],
    "answer": 1,
    "explanation": "The notes show values that round equally even though one is slightly larger at full precision."
  },
  {
    "id": 1032,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "Why is Naive Bayes described as 'naive'?",
    "options": [
      "It ignores the target",
      "It assumes conditional independence among input features",
      "It never uses probabilities",
      "It requires no training data"
    ],
    "answer": 1,
    "explanation": "Its simplifying assumption is conditional independence of features given the class."
  },
  {
    "id": 1033,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "Which Naive Bayes variant is suited to continuous features assumed normally distributed?",
    "options": [
      "BernoulliNB",
      "CategoricalNB",
      "MultinomialNB",
      "GaussianNB"
    ],
    "answer": 3,
    "explanation": "Gaussian Naive Bayes assumes continuous feature values follow a Gaussian distribution within each class."
  },
  {
    "id": 1034,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "Which variant is especially appropriate when word counts matter?",
    "options": [
      "Multinomial Naive Bayes",
      "Gaussian Naive Bayes",
      "Ordinal regression",
      "Categorical Naive Bayes"
    ],
    "answer": 0,
    "explanation": "The notes identify Multinomial Naive Bayes for discrete data such as text word counts."
  },
  {
    "id": 1035,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "Which variant is designed for binary or Boolean features?",
    "options": [
      "Gaussian Naive Bayes",
      "Bernoulli Naive Bayes",
      "Categorical Naive Bayes",
      "Linear regression"
    ],
    "answer": 1,
    "explanation": "Bernoulli Naive Bayes models binary features such as word presence or absence."
  },
  {
    "id": 1036,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "Which variant is used in the fruit example with Color and Size?",
    "options": [
      "GaussianNB",
      "BernoulliNB",
      "CategoricalNB",
      "MultinomialNB"
    ],
    "answer": 2,
    "explanation": "The fruit notebook initializes CategoricalNB for encoded categorical predictors."
  },
  {
    "id": 1037,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "What does LabelEncoder do in the categorical fruit notebook?",
    "options": [
      "Standardizes values around zero",
      "Converts categorical labels into numeric codes",
      "Splits training and testing rows",
      "Computes class probabilities"
    ],
    "answer": 1,
    "explanation": "LabelEncoder transforms Color, Size, and Fruit categories into numeric labels."
  },
  {
    "id": 1038,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "Which two features form X in the categorical fruit example?",
    "options": [
      "Color and Fruit",
      "Size and Fruit",
      "Color and Size",
      "Fruit only"
    ],
    "answer": 2,
    "explanation": "X is df[['Color', 'Size']], while Fruit is the target."
  },
  {
    "id": 1039,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "Which fitted GaussianNB attribute contains per-class feature means?",
    "options": [
      "gnb.var_",
      "gnb.theta_",
      "gnb.classes_only_",
      "gnb.coef_"
    ],
    "answer": 1,
    "explanation": "The diabetes notebook assigns means = gnb.theta_."
  },
  {
    "id": 1040,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "Which fitted GaussianNB attribute contains per-class feature variances?",
    "options": [
      "gnb.var_",
      "gnb.theta_",
      "gnb.scale_",
      "gnb.sigma"
    ],
    "answer": 0,
    "explanation": "The diabetes notebook assigns variances = gnb.var_."
  },
  {
    "id": 1041,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "In the golf example, which class is predicted for Rainy, Hot, High humidity, and Wind=False?",
    "options": [
      "YES",
      "NO",
      "A tie",
      "Cannot be compared"
    ],
    "answer": 1,
    "explanation": "The notes calculate 0.60 for NO versus 0.22 for YES after normalization."
  },
  {
    "id": 1042,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "Why can the evidence denominator be ignored when choosing the most probable Naive Bayes class?",
    "options": [
      "It is always zero",
      "It is the same for every class being compared",
      "It equals the prior",
      "It only applies to GaussianNB"
    ],
    "answer": 1,
    "explanation": "For a fixed observation, the evidence does not depend on the candidate class, so it does not change the argmax."
  },
  {
    "id": 1043,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multiple-choice",
    "title": "Which function creates the frequency cross-tabulation in the categorical notebook?",
    "options": [
      "pd.concat",
      "pd.crosstab",
      "pd.read_csv",
      "pd.DataFrame.predict"
    ],
    "answer": 1,
    "explanation": "The code uses pd.crosstab(X[feature], y, ...)."
  },
  {
    "id": 1044,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multi-answer",
    "title": "Which two metrics are imported in the multiple linear-regression example? (Choose 2)",
    "options": [
      "r2_score",
      "mean_squared_error",
      "accuracy_score",
      "recall_score"
    ],
    "answers": [
      0,
      1
    ],
    "selectCount": 2,
    "explanation": "The example imports r2_score and mean_squared_error from sklearn.metrics."
  },
  {
    "id": 1045,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "multi-answer",
    "title": "Which three columns are predictors in the multiple linear-regression example? (Choose 3)",
    "options": [
      "sepal_length",
      "sepal_width",
      "petal_length",
      "petal_width",
      "species"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "selectCount": 3,
    "explanation": "The target is sepal_length; the three listed measurements form X."
  },
  {
    "id": 1046,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multi-answer",
    "title": "Which four examples in the notes have binary outcomes? (Choose 4)",
    "options": [
      "Loan offer: yes/no",
      "Cancer risk: high/low",
      "Football win: yes/no",
      "Spam/not spam",
      "Shirt size: XS/S/M/L/XL",
      "Transport type in 2040"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "selectCount": 4,
    "explanation": "The first four each have two possible classes; shirt size is ordinal and transport type is multinomial."
  },
  {
    "id": 1047,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "multi-answer",
    "title": "Which two actions are performed by StandardScaler in the insurance workflow? (Choose 2)",
    "options": [
      "fit_transform is applied to the age training data",
      "transform is applied to new age data",
      "It predicts bought_insurance directly",
      "It changes the threshold to 1.0"
    ],
    "answers": [
      0,
      1
    ],
    "selectCount": 2,
    "explanation": "The scaler is fit and applied to df[['age']], then reused with transform for new observations."
  },
  {
    "id": 1048,
    "subject": "softmax",
    "label": "Softmax",
    "type": "multi-answer",
    "title": "Which two statements correctly compare binary and multinomial logistic regression? (Choose 2)",
    "options": [
      "Binary logistic regression uses sigmoid",
      "Multinomial logistic regression uses softmax",
      "Binary logistic regression requires at least three classes",
      "Multinomial logistic regression predicts only ordered classes"
    ],
    "answers": [
      0,
      1
    ],
    "selectCount": 2,
    "explanation": "The notes pair binary classification with sigmoid and three-or-more-class multinomial classification with softmax."
  },
  {
    "id": 1049,
    "subject": "softmax",
    "label": "Softmax",
    "type": "multi-answer",
    "title": "Which three steps appear in the softmax example? (Choose 3)",
    "options": [
      "Exponentiate each score",
      "Sum the exponentials",
      "Divide each exponential by the sum",
      "Subtract the class mean from every label",
      "Discard the largest score"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "selectCount": 3,
    "explanation": "Softmax exponentiates logits, sums them, and normalizes each exponential by that sum."
  },
  {
    "id": 1050,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multi-answer",
    "title": "Which three advantages of Naive Bayes are listed in the notes? (Choose 3)",
    "options": [
      "Easy and fast to implement",
      "Needs less training data",
      "Not sensitive to irrelevant features",
      "Never makes classification errors",
      "Requires dependent features"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "selectCount": 3,
    "explanation": "The notes list speed/ease, lower training-data needs, and low sensitivity to irrelevant features."
  },
  {
    "id": 1051,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multi-answer",
    "title": "Which four are listed applications of Naive Bayes? (Choose 4)",
    "options": [
      "Spam filtration",
      "Sentiment analysis",
      "Classifying articles",
      "Real-time predictions",
      "Drawing regression lines",
      "Sorting DataFrame columns"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "selectCount": 4,
    "explanation": "All four appear in the applications list; the remaining choices are unrelated operations."
  },
  {
    "id": 1052,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multi-answer",
    "title": "Which three steps describe the stated Naive Bayes workflow? (Choose 3)",
    "options": [
      "Convert the dataset into frequency tables",
      "Generate a likelihood table",
      "Use Bayes theorem for posterior probability",
      "Fit a least-squares line",
      "Apply softmax to every binary feature"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "selectCount": 3,
    "explanation": "The notes give these three steps in order."
  },
  {
    "id": 1053,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "multi-answer",
    "title": "Which two imports are used for model evaluation in GaussianNB-Code2? (Choose 2)",
    "options": [
      "accuracy_score",
      "recall_score",
      "r2_score",
      "mean_squared_error"
    ],
    "answers": [
      0,
      1
    ],
    "selectCount": 2,
    "explanation": "The notebook imports recall_score and accuracy_score from sklearn.metrics, although it calculates accuracy in the shown cell."
  },
  {
    "id": 1054,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "fill-blank",
    "title": "The function used to split features and targets into training and testing subsets is _____.",
    "answer": "train_test_split",
    "caseSensitive": false,
    "explanation": "The notebooks import train_test_split from sklearn.model_selection."
  },
  {
    "id": 1055,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "fill-blank",
    "title": "In the first Iris example, the best-fit line is plotted in _____ while the observations are blue.",
    "answer": "red",
    "caseSensitive": false,
    "explanation": "The plot call uses color='red' for the prediction line."
  },
  {
    "id": 1056,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "fill-blank",
    "title": "True or False: In reshape(-1, 1), the value 1 means the resulting array has one column. _____",
    "answer": "True",
    "caseSensitive": false,
    "explanation": "The notebook comment explicitly states that 1 means one column."
  },
  {
    "id": 1057,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "fill-blank",
    "title": "The S-shaped function used by binary logistic regression is the _____ function.",
    "answer": "sigmoid",
    "caseSensitive": false,
    "explanation": "The notes identify the logistic function as the sigmoid function."
  },
  {
    "id": 1058,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "fill-blank",
    "title": "A dependent variable with ordered categories is modeled by _____ logistic regression.",
    "answer": "ordinal",
    "caseSensitive": false,
    "explanation": "Ordinal logistic regression is for outcomes with a natural ordering."
  },
  {
    "id": 1059,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "fill-blank",
    "title": "True or False: sklearn.model_processor is the module used to import train_test_split. _____",
    "answer": "False",
    "caseSensitive": false,
    "explanation": "The notebooks import train_test_split from sklearn.model_selection."
  },
  {
    "id": 1060,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "fill-blank",
    "title": "True or False: LogisticRegression.predict() is used to fit the model. _____",
    "answer": "False",
    "caseSensitive": false,
    "explanation": "fit trains the model; predict generates labels from a fitted model."
  },
  {
    "id": 1061,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "fill-blank",
    "title": "In the insurance notebook, the default classification threshold stated in the comment is _____.",
    "answer": "0.5",
    "caseSensitive": false,
    "explanation": "The LogisticRegression initialization is annotated with default threshold value = 0.5."
  },
  {
    "id": 1062,
    "subject": "softmax",
    "label": "Softmax",
    "type": "fill-blank",
    "title": "The unnormalized class scores supplied to softmax are called _____.",
    "answer": "logits",
    "caseSensitive": false,
    "explanation": "The notes call z values logits or scores."
  },
  {
    "id": 1063,
    "subject": "softmax",
    "label": "Softmax",
    "type": "fill-blank",
    "title": "The operation that returns the index of the largest class probability is _____.",
    "answer": "argmax",
    "caseSensitive": false,
    "explanation": "The notes choose the prediction using argmax."
  },
  {
    "id": 1064,
    "subject": "softmax",
    "label": "Softmax",
    "type": "fill-blank",
    "title": "True or False: Ordinal logistic regression treats Poor, Fair, Good, and Excellent as unordered labels. _____",
    "answer": "False",
    "caseSensitive": false,
    "explanation": "Their natural order is the defining feature of the ordinal setting."
  },
  {
    "id": 1065,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "fill-blank",
    "title": "The probability P(y) is also called the _____ probability.",
    "answer": "class",
    "caseSensitive": false,
    "explanation": "The notation section states that P(y) is the class probability."
  },
  {
    "id": 1066,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "fill-blank",
    "title": "The probability P(x_i | y) is called _____ probability.",
    "answer": "conditional",
    "caseSensitive": false,
    "explanation": "The notation section labels P(x_i | y) as conditional probability."
  },
  {
    "id": 1067,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "fill-blank",
    "title": "True or False: Gaussian Naive Bayes is intended for continuous data under a normal-distribution assumption. _____",
    "answer": "True",
    "caseSensitive": false,
    "explanation": "The notes state both the continuous-data use and Gaussian-distribution assumption."
  },
  {
    "id": 1068,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "fill-blank",
    "title": "True or False: Bernoulli Naive Bayes is designed primarily for continuous normally distributed features. _____",
    "answer": "False",
    "caseSensitive": false,
    "explanation": "Bernoulli Naive Bayes is designed for binary or Boolean features."
  },
  {
    "id": 1069,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "fill-blank",
    "title": "The final Naive Bayes prediction is the class with the _____ posterior probability.",
    "answer": "maximum",
    "caseSensitive": false,
    "explanation": "The notes state that the class with the maximum posterior value is selected."
  },
  {
    "id": 1070,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "code-fill",
    "title": "Complete the exact import used for the linear-regression model.",
    "explanation": "The notebook imports LinearRegression from sklearn.linear_model.",
    "code": [
      [
        {
          "text": "from sklearn.linear_model import "
        },
        {
          "blank": "LinearRegression",
          "aria": "model class"
        }
      ],
      [
        {
          "text": "lr = LinearRegression()"
        }
      ],
      [
        {
          "text": "lr.fit(X_train, y_train)"
        }
      ]
    ]
  },
  {
    "id": 1071,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "code-fill",
    "title": "Complete the exact line that reshapes X_train into a 2D column vector.",
    "explanation": "The original notebook line uses np.array and reshape(-1,1).",
    "code": [
      [
        {
          "text": "X_train = np.array(X_train).reshape("
        },
        {
          "blank": "-1,1",
          "aria": "reshape dimensions"
        },
        {
          "text": ")     #Reshapes the array into a 2D column vector."
        }
      ]
    ]
  },
  {
    "id": 1072,
    "subject": "linear-regression",
    "label": "Linear Regression",
    "type": "code-fill",
    "title": "Complete the exact metric calculation for the training predictions.",
    "explanation": "The notebook evaluates training predictions with r2_score.",
    "code": [
      [
        {
          "text": "from sklearn.metrics import r2_score"
        }
      ],
      [
        {
          "text": "r2_train = "
        },
        {
          "blank": "r2_score",
          "aria": "metric function"
        },
        {
          "text": "(y_train, Y_pred_train1)"
        }
      ],
      [
        {
          "text": "print('R2 train scores: ', r2_train)"
        }
      ]
    ]
  },
  {
    "id": 1073,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "code-fill",
    "title": "Complete the exact sigmoid function from the insurance notebook.",
    "explanation": "The missing expression is copied from the function body in the notebook.",
    "code": [
      [
        {
          "text": "def sigmoid(x):"
        }
      ],
      [
        {
          "text": "    return "
        },
        {
          "blank": "1 / (1 + np.exp(-x))",
          "aria": "sigmoid expression"
        }
      ]
    ]
  },
  {
    "id": 1074,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "code-fill",
    "title": "Complete the exact train/test split used in the insurance example.",
    "explanation": "The notebook uses a 30% test set and random_state 0.",
    "code": [
      [
        {
          "text": "from sklearn.model_selection import train_test_split"
        }
      ],
      [
        {
          "text": "X_train, X_test, y_train, y_test = train_test_split(X,y, test_size = "
        },
        {
          "blank": "0.3",
          "aria": "test size"
        },
        {
          "text": ", random_state=0)"
        }
      ]
    ]
  },
  {
    "id": 1075,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "code-fill",
    "title": "Complete the exact creation and training lines for the insurance classifier.",
    "explanation": "These lines instantiate LogisticRegression and fit it to the training data.",
    "code": [
      [
        {
          "text": "log_reg = "
        },
        {
          "blank": "LogisticRegression()",
          "aria": "classifier constructor"
        },
        {
          "text": "\t\t#default threshold value = 0.5"
        }
      ],
      [
        {
          "text": "\t\t\t\t\t                # value > 0.5 = 1, else 0"
        }
      ],
      [
        {
          "text": "log_reg.fit(X_train, y_train)"
        }
      ]
    ]
  },
  {
    "id": 1076,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "code-fill",
    "title": "Complete the exact scaling lines applied to the age column.",
    "explanation": "The notebook fits StandardScaler and replaces df['age'] with the scaled values.",
    "code": [
      [
        {
          "text": "from sklearn.preprocessing import StandardScaler"
        }
      ],
      [
        {
          "text": "scaler = StandardScaler()"
        }
      ],
      [
        {
          "text": "scaled_age = scaler."
        },
        {
          "blank": "fit_transform",
          "aria": "scaling method"
        },
        {
          "text": "(df[['age']])"
        }
      ],
      [
        {
          "text": "df['age'] = scaled_age"
        }
      ]
    ]
  },
  {
    "id": 1077,
    "subject": "logistic-regression",
    "label": "Logistic Regression",
    "type": "code-fill",
    "title": "Complete the exact breast-cancer model initialization.",
    "explanation": "The notebook sets max_iter to 100 before fitting.",
    "code": [
      [
        {
          "text": "from sklearn.linear_model import LogisticRegression"
        }
      ],
      [
        {
          "text": "logistic = LogisticRegression(max_iter="
        },
        {
          "blank": "100",
          "aria": "maximum iterations"
        },
        {
          "text": ")"
        }
      ],
      [
        {
          "text": "logistic.fit(X_train, y_train)"
        }
      ]
    ]
  },
  {
    "id": 1078,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "code-fill",
    "title": "Complete the exact GaussianNB import and fitting code.",
    "explanation": "The shown cell imports GaussianNB, constructs gnb, and fits the training set.",
    "code": [
      [
        {
          "text": "from sklearn.naive_bayes import "
        },
        {
          "blank": "GaussianNB",
          "aria": "classifier class"
        },
        {
          "text": "  "
        }
      ],
      [
        {
          "text": "gnb = GaussianNB()  "
        }
      ],
      [
        {
          "text": "gnb.fit(x_train, y_train)"
        }
      ]
    ]
  },
  {
    "id": 1079,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "code-fill",
    "title": "Complete the exact Gaussian probability-density return statement.",
    "explanation": "The blank is the exact expression used in GaussianNB-code1.",
    "code": [
      [
        {
          "text": "def gaussian_probability(x, mean, var):"
        }
      ],
      [
        {
          "text": "    exponent = np.exp(-((x - mean) ** 2) / (2 * var))"
        }
      ],
      [
        {
          "text": "    return "
        },
        {
          "blank": "(1 / np.sqrt(2 * np.pi * var)) * exponent",
          "aria": "density expression"
        }
      ]
    ]
  },
  {
    "id": 1080,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "code-fill",
    "title": "Complete the exact feature and target assignment in the fruit example.",
    "explanation": "Color and Size form X, while Fruit is y.",
    "code": [
      [
        {
          "text": "# Split data into features and target"
        }
      ],
      [
        {
          "text": "X = df[["
        },
        {
          "blank": "'Color', 'Size'",
          "aria": "feature columns"
        },
        {
          "text": "]]"
        }
      ],
      [
        {
          "text": "y = df['Fruit']"
        }
      ]
    ]
  },
  {
    "id": 1081,
    "subject": "naive-bayes",
    "label": "Naive Bayes",
    "type": "code-fill",
    "title": "Complete the exact prediction-decoding lines from the fruit notebook.",
    "explanation": "The model predicts encoded labels, then inverse_transform restores the fruit names.",
    "code": [
      [
        {
          "text": "# Make prediction"
        }
      ],
      [
        {
          "text": "prediction = cnb.predict(new_data)"
        }
      ],
      [
        {
          "text": "predicted_fruit = le_fruit."
        },
        {
          "blank": "inverse_transform",
          "aria": "label decoding method"
        },
        {
          "text": "(prediction)"
        }
      ],
      [],
      [
        {
          "text": "print(predicted_fruit)"
        }
      ]
    ]
  }
];

const knownSubjectMeta = {
  "programming": { title: "Programming basics", desc: "Variables, loops, and functions", icon: "⌘", color: "blue" },
  "web": { title: "Web development", desc: "HTML, CSS, and responsive design", icon: "◇", color: "coral" },
  "design": { title: "Design principles", desc: "Hierarchy, layout, and contrast", icon: "✣", color: "gold" },
  "linear-regression": { title: "Linear Regression", desc: "Line fitting, MSE, R², and train-test splits", icon: "📈", color: "blue" },
  "logistic-regression": { title: "Logistic Regression", desc: "Sigmoid, odds, log loss, and classification", icon: "🎯", color: "coral" },
  "softmax": { title: "Softmax Regression", desc: "Multiclass logits, probabilities, and cross-entropy", icon: "✦", color: "gold" },
  "naive-bayes": { title: "Naive Bayes", desc: "Bayes rule, priors, posteriors, and text classification", icon: "⚖", color: "green" },
  "cs0075-code-snippets": { title: "CS0075 Machine Learning Algorithms", desc: "Code snippets and concepts from linear regression, logistic regression, Naive Bayes, imports, data preprocessing, KNN, and regularization", icon: "⌘", color: "coral" }
};

const subjectGroups = {
  cs0075: {
    title: "CS0075 Machine Learning Algorithms",
    desc: "Regression, classification, and Naive Bayes",
    icon: "✦",
    color: "blue",
    subjects: ["linear-regression", "logistic-regression", "softmax", "naive-bayes"]
  }
};

function getSubjects() {
  const subjectMap = new Map();
  questions.forEach((q) => {
    if (!q.subject) return;
    const group = Object.entries(subjectGroups).find(([, details]) => details.subjects.includes(q.subject));
    const subjectId = group ? group[0] : q.subject;
    if (!subjectMap.has(subjectId)) {
      const meta = group ? group[1] : knownSubjectMeta[q.subject] || {
        title: q.label || (q.subject.charAt(0).toUpperCase() + q.subject.slice(1).replace(/-/g, ' ')),
        desc: 'Review questions and key exercises',
        icon: '✦',
        color: 'blue'
      };
      subjectMap.set(subjectId, {
        id: subjectId,
        title: meta.title,
        desc: meta.desc,
        icon: meta.icon,
        color: meta.color,
        count: 0
      });
    }
    subjectMap.get(subjectId).count += 1;
  });

  return Array.from(subjectMap.values()).map((s) => ({
    ...s,
    count: `${s.count} question${s.count === 1 ? '' : 's'}`
  }));
}

const state = {
  view: 'dashboard',
  sessionSubject: 'all',
  sessionQuestionIds: null,
  sessionSetIds: null,
  quizSetupStep: 'subjects',
  questionTypes: ['multiple-choice', 'fill-blank', 'code-fill', 'multi-answer'],
  shuffleQuestions: false,
  optionOrders: {},
  answerMode: 'immediate',
  quizActive: false,
  showResults: false,
  results: null,
  questionIndex: 0,
  selected: null,
  checked: false,
  answers: JSON.parse(localStorage.getItem('midtermAnswers') || '{}'),
  dark: localStorage.getItem('midtermDark') === 'true'
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setView(view) {
  state.view = view;
  $$('.view').forEach((panel) => panel.classList.toggle('active', panel.dataset.viewPanel === view));
  $$('.nav-link[data-view]').forEach((link) => link.classList.toggle('active', link.dataset.view === view));
  $('#breadcrumbCurrent').textContent = view === 'quizzer' ? 'Quizzer' : view === 'answer-key' ? 'Answer key' : 'Dashboard';
  $('#sidebar')?.classList.remove('open');
  if (view === 'quizzer') renderQuiz();
  if (view === 'answer-key') renderAnswerKey();
}

function ensureAnswerKeyView() {
  const nav = $('.main-nav');
  const quizzerView = $('#quizzerView');
  if (!nav || !quizzerView || $('#answerKeyView')) return;

  const quizzerButton = nav.querySelector('[data-view="quizzer"]');
  const answerKeyButton = document.createElement('button');
  answerKeyButton.className = 'nav-link';
  answerKeyButton.dataset.view = 'answer-key';
  answerKeyButton.type = 'button';
  answerKeyButton.innerHTML = '<span class="nav-icon">✓</span><span>Answer key</span>';
  quizzerButton.after(answerKeyButton);

  const answerKeyView = document.createElement('section');
  answerKeyView.className = 'view';
  answerKeyView.id = 'answerKeyView';
  answerKeyView.dataset.viewPanel = 'answer-key';
  answerKeyView.innerHTML = `
    <div class="quiz-header">
      <div>
        <p class="eyebrow accent">Reference library</p>
        <h1>Answer key</h1>
        <p class="view-intro">Completed code snippets and fill-in answers, in quiz format.</p>
      </div>
    </div>
    <div class="quiz-layout">
      <div class="quiz-main" id="answerKeyList"></div>
      <aside class="quiz-sidebar panel">
        <p class="eyebrow">In this answer key</p>
        <div class="question-list" id="answerKeyNavigation"></div>
        <div class="session-tip"><span>✦</span><p><strong>Reference</strong><br />Each blank is filled with its expected answer.</p></div>
      </aside>
    </div>
  `;
  quizzerView.after(answerKeyView);
}

function renderSidebarSubjects() {
  const sidebarSection = $('.sidebar-section');
  if (!sidebarSection) return;
  const currentSubjects = getSubjects();
  sidebarSection.innerHTML = `
    <p class="eyebrow">Subjects</p>
    ${currentSubjects.map((s) => `
      <button class="subject-link ${state.sessionSubject === s.id ? 'active' : ''}" data-sidebar-subject="${s.id}" type="button">
        <span class="subject-dot ${s.color}"></span>${escapeHtml(s.title)}
      </button>
    `).join('')}
  `;
  $$('[data-sidebar-subject]').forEach((button) => {
    button.addEventListener('click', () => {
      state.sessionSubject = button.dataset.sidebarSubject;
      state.sessionSubjects = [state.sessionSubject];
      state.sessionQuestionIds = null;
      state.quizSetupStep = 'subjects';
      state.quizActive = false;
      state.showResults = false;
      setView('quizzer');
      renderSidebarSubjects();
    });
  });
}

function renderSubjects() {
  const currentSubjects = getSubjects();
  const grid = $('#subjectGrid');
  if (!grid) return;
  grid.innerHTML = currentSubjects.map((subject) => `
    <article class="subject-card" data-subject-card="${subject.id}">
      <div class="subject-card-top">
        <div class="subject-card-icon ${subject.color}">${subject.icon}</div>
        <span class="card-count">${subject.count}</span>
      </div>
      <h3>${escapeHtml(subject.title)}</h3>
      <p>${escapeHtml(subject.desc)}</p>
    </article>
  `).join('');
  $$('[data-subject-card]').forEach((card) => {
    card.addEventListener('click', () => {
      state.sessionSubject = card.dataset.subjectCard;
      state.sessionSubjects = [state.sessionSubject];
      state.sessionQuestionIds = null;
      state.quizSetupStep = 'subjects';
      state.quizActive = false;
      state.showResults = false;
      setView('quizzer');
      renderSidebarSubjects();
    });
  });
}

function subjectQuestions() {
  return state.sessionSubject === 'all' ? questions : questions.filter((q) => q.subject === state.sessionSubject);
}

function filteredQuestions() {
  const available = subjectQuestions();
  return state.sessionQuestionIds ? available.filter((q) => state.sessionQuestionIds.includes(q.id)) : available;
}

function getCodeAnswers(question) {
  return question.code.flat().filter((part) => part.blank).map((part) => part.blank);
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function optionOrderFor(question) {
  if (!state.optionOrders[question.id]) {
    state.optionOrders[question.id] = shuffleArray(question.options.map((_, index) => index));
  }
  return state.optionOrders[question.id];
}

function isQuestionAnswered(q) {
  const ans = state.answers[q.id];
  if (!ans) return false;
  if (q.type === 'multiple-choice') return Number.isInteger(ans.selected);
  if (q.type === 'multi-answer') return Array.isArray(ans.selected) && ans.selected.length > 0;
  if (q.type === 'fill-blank') return typeof ans.value === 'string' && ans.value.trim().length > 0;
  if (q.type === 'code-fill') return Array.isArray(ans.values) && ans.values.some((v) => v && v.trim().length > 0);
  return false;
}

function renderMultipleChoiceReview(question) {
  const answer = state.answers[question.id];
  const selected = answer && Number.isInteger(answer.selected) ? answer.selected : null;
  return `<div class="result-options-grid">${optionOrderFor(question).map((originalIndex, displayIndex) => {
    const isCorrect = originalIndex === question.answer;
    const isSelected = originalIndex === selected;
    const status = isCorrect ? 'correct' : (isSelected ? 'incorrect' : '');
    return `<span class="result-option ${status} ${isSelected ? 'selected' : ''}">
      <span class="option-letter">${String.fromCharCode(65 + displayIndex)}</span>
      <span>${escapeHtml(question.options[originalIndex])}</span>
    </span>`;
  }).join('')}</div>`;
}

function renderResultItems(filter = 'all') {
  const list = filteredQuestions().filter((question) => {
    const answer = state.answers[question.id];
    const answered = isQuestionAnswered(question);
    if (filter === 'correct') return Boolean(answer?.correct);
    if (filter === 'incorrect') return answered && !answer.correct;
    return true;
  });

  const resultsList = $('#resultsList');
  if (!resultsList) return;
  if (!list.length) {
    resultsList.innerHTML = `<div class="empty-results">No ${filter} answers in this session.</div>`;
    return;
  }

  resultsList.innerHTML = list.map((question) => {
    const answer = state.answers[question.id];
    const isCorrect = Boolean(answer?.correct);

    let reviewMarkup = '';
    if (question.type === 'multiple-choice') {
      reviewMarkup = renderMultipleChoiceReview(question);
    } else if (question.type === 'multi-answer') {
      const selected = Array.isArray(answer?.selected) ? answer.selected : [];
      const given = selected.length ? selected.map((idx) => question.options[idx]).join(', ') : 'Skipped';
      const expected = question.answers.map((idx) => question.options[idx]).join(', ');
      reviewMarkup = `<small>Your choice: ${escapeHtml(given)}${isCorrect ? '' : ` · Correct: ${escapeHtml(expected)}`}</small>`;
    } else if (question.type === 'fill-blank') {
      const given = answer?.value?.trim() || 'Skipped';
      reviewMarkup = `<small>Your answer: ${escapeHtml(given)}${isCorrect ? '' : ` · Correct: ${escapeHtml(question.answer)}`}</small>`;
    } else if (question.type === 'code-fill') {
      const given = answer?.values?.join(' · ') || 'Skipped';
      const expected = getCodeAnswers(question).join(' · ');
      reviewMarkup = `<small>Your answer: ${escapeHtml(given)}${isCorrect ? '' : ` · Correct: ${escapeHtml(expected)}`}</small>`;
    }

    return `
      <div class="result-row">
        <span class="result-index ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✓' : '!'}</span>
        <div>
          <strong>${escapeHtml(question.title)}</strong>
          ${reviewMarkup}
        </div>
      </div>
    `;
  }).join('');
}

function showResultsScreen() {
  const setup = $('#quizSetup');
  const session = $('#quizSession');
  const result = state.results;
  const incorrectCount = result.incorrectIds.length;
  setup.hidden = false;
  session.hidden = true;

  setup.innerHTML = `
    <div class="quiz-header results-header">
      <div>
        <p class="eyebrow accent">Session complete</p>
        <h1>Review locked in.</h1>
        <p class="view-intro">Your answers are ready to review.</p>
      </div>
      <div class="quiz-score">
        <span class="eyebrow">Score</span>
        <strong>${result.correct} / ${result.total}</strong>
      </div>
    </div>
    <section class="panel results-panel">
      <div class="results-summary">
        <strong>${result.correct} correct</strong>
        <span>${result.answered} answered · ${result.total - result.answered} skipped</span>
      </div>
      <div class="result-filter-row" role="tablist" aria-label="Filter answer review">
        <button class="result-filter active" data-result-filter="all" type="button">All <span>${result.total}</span></button>
        <button class="result-filter" data-result-filter="correct" type="button">Correct <span>${result.correct}</span></button>
        <button class="result-filter" data-result-filter="incorrect" type="button">Incorrect <span>${incorrectCount}</span></button>
      </div>
      <div id="resultsList"></div>
      <div class="results-actions">
        <button class="primary-button" id="retryQuizButton" type="button">Retry all <span>↻</span></button>
        <button class="secondary-button" id="retryIncorrectButton" type="button" ${incorrectCount ? '' : 'disabled'}>Retry all incorrect <span>↻</span></button>
        <button class="text-button" id="chooseSubjectButton" type="button">Choose another subject</button>
      </div>
      <p class="results-note">${incorrectCount ? `${incorrectCount} question${incorrectCount === 1 ? '' : 's'} available to retry.` : 'No incorrect answers to retry.'}</p>
    </section>
  `;

  renderResultItems('all');

  $$('[data-result-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      $$('.result-filter').forEach((item) => item.classList.toggle('active', item === button));
      renderResultItems(button.dataset.resultFilter);
    });
  });

  $('#retryQuizButton').addEventListener('click', () => {
    state.sessionQuestionIds = [...(result.fullQuestionIds || result.questionIds)];
    state.showResults = false;
    startQuiz(true);
  });

  $('#retryIncorrectButton').addEventListener('click', () => {
    if (!incorrectCount) return;
    state.sessionQuestionIds = [...result.incorrectIds];
    state.showResults = false;
    startQuiz(true);
  });

  $('#chooseSubjectButton').addEventListener('click', () => {
    state.showResults = false;
    state.sessionQuestionIds = null;
    state.quizSetupStep = 'subjects';
    renderQuiz();
  });
}

function renderQuizSetup() {
  const currentSubjects = getSubjects();
  const setupSubjects = [
    { id: 'all', title: 'All subjects', desc: 'A mixed review across every topic', count: `${questions.length} questions`, icon: '✦', color: 'blue' },
    ...currentSubjects
  ];

  $('#quizSetup').innerHTML = `
    <div class="quiz-header setup-header">
      <div>
        <p class="eyebrow accent">Practice mode</p>
        <h1>Choose what to lock in.</h1>
        <p class="view-intro">Pick a subject to begin your review session.</p>
      </div>
    </div>
    <div class="setup-subject-layout">
      <section class="setup-subjects">
        <p class="eyebrow">Subject</p>
        <div class="setup-subject-grid">
          ${setupSubjects.map((s) => `
            <button class="setup-subject-card ${state.sessionSubject === s.id ? 'selected' : ''}" data-setup-subject="${s.id}" type="button">
              <span class="subject-card-icon ${s.color}">${s.icon}</span>
              <span><strong>${escapeHtml(s.title)}</strong><small>${escapeHtml(s.desc)}</small></span>
              <em>${s.count}</em>
            </button>
          `).join('')}
        </div>
      </section>
      <aside class="panel setup-start-panel">
        <p class="eyebrow">Ready?</p>
        <h2>Lock in and go.</h2>
        <p>The answer setting is available in the bottom bar during the quiz.</p>
        <button class="primary-button start-quiz-button" id="startQuizButton" type="button">Start quiz <span>→</span></button>
      </aside>
    </div>
  `;

  $$('[data-setup-subject]').forEach((button) => {
    button.addEventListener('click', () => {
      state.sessionSubject = button.dataset.setupSubject;
      renderQuizSetup();
      renderSidebarSubjects();
    });
  });

  $('#startQuizButton').addEventListener('click', () => startQuiz(false));
}

function startQuiz(keepScope = false) {
  let quizQuestions;
  if (keepScope) {
    quizQuestions = filteredQuestions();
  } else {
    quizQuestions = subjectQuestions();
    const questionIds = quizQuestions.map((question) => question.id);
    state.sessionQuestionIds = state.shuffleQuestions ? shuffleArray(questionIds) : questionIds;
    state.sessionSetIds = [...state.sessionQuestionIds];
    state.optionOrders = {};
    quizQuestions.forEach((question) => {
      if (question.options) optionOrderFor(question);
    });
    quizQuestions = filteredQuestions();
  }
  if (!quizQuestions.length) {
    showToast('No questions are available for that format and subject selection.');
    return;
  }
  quizQuestions.forEach((q) => delete state.answers[q.id]);
  state.quizActive = true;
  state.showResults = false;
  state.results = null;
  state.questionIndex = 0;
  state.selected = null;
  state.checked = false;
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function finishSession() {
  const list = filteredQuestions();
  const answered = list.filter((q) => isQuestionAnswered(q));
  const correct = answered.filter((q) => state.answers[q.id]?.correct).length;
  state.results = {
    total: list.length,
    answered: answered.length,
    correct,
    questionIds: list.map((q) => q.id),
    fullQuestionIds: state.sessionSetIds || list.map((q) => q.id),
    incorrectIds: answered.filter((q) => !state.answers[q.id]?.correct).map((q) => q.id)
  };
  state.quizActive = false;
  state.showResults = true;
  state.questionIndex = 0;
  showResultsScreen();
  updateDashboard();
}

function codeMarkup(question) {
  const saved = state.answers[question.id]?.values || [];
  let blankIndex = 0;
  const buttonLabel = state.answerMode === 'end' ? 'Save answer' : 'Check answer';
  return `
    <div class="code-editor">
      <div class="code-toolbar"><span>javascript</span><span>Fill in the blanks</span></div>
      <div class="code-body">${question.code.map((line, lineIndex) => `
        <span class="code-line"><span class="line-no">${lineIndex + 1}</span>${line.map((part) => {
          if (!part.blank) return `<span class="${part.className || ''}">${escapeHtml(part.text)}</span>`;
          const index = blankIndex++;
          const value = saved[index] || '';
          const status = state.checked ? (value.trim().toLowerCase() === part.blank.toLowerCase() ? 'correct' : 'incorrect') : '';
          return `<input class="code-blank ${status}" value="${escapeHtml(value)}" data-answer="${part.blank}" aria-label="${part.aria || 'code blank'}" autocomplete="off" spellcheck="false" />`;
        }).join('')}</span>
      `).join('')}</div>
    </div>
    <div class="code-actions">
      <button class="primary-button" id="checkCodeButton" type="button">${buttonLabel} <span>✓</span></button>
    </div>
  `;
}

function completedCodeMarkup(question) {
  return `
    <div class="code-editor">
      <div class="code-toolbar"><span>python</span><span>Completed code</span></div>
      <div class="code-body">${question.code.map((line, lineIndex) => `
        <span class="code-line"><span class="line-no">${lineIndex + 1}</span>${line.map((part) => part.blank
          ? `<span class="code-blank correct answer-key-code-blank" aria-label="${escapeHtml(part.aria || 'code answer')}">${escapeHtml(part.blank)}</span>`
          : `<span class="${escapeHtml(part.className || '')}">${escapeHtml(part.text)}</span>`
        ).join('')}</span>
      `).join('')}</div>
    </div>
  `;
}

function renderAnswerKey() {
  const answerKeyList = $('#answerKeyList');
  const answerKeyNavigation = $('#answerKeyNavigation');
  if (!answerKeyList || !answerKeyNavigation) return;

  const answerKeyQuestions = questions.filter((question) => question.type === 'code-fill' || question.type === 'fill-blank');
  if (!answerKeyQuestions.length) {
    answerKeyList.innerHTML = '<article class="question-card"><p class="eyebrow">Answer key</p><h2>Loading question banks…</h2></article>';
    answerKeyNavigation.innerHTML = '';
    return;
  }

  answerKeyList.innerHTML = answerKeyQuestions.map((question, index) => {
    const answerMarkup = question.type === 'code-fill'
      ? completedCodeMarkup(question)
      : `<div class="fill-blank-card"><div class="fill-blank-input-wrap"><input class="fill-blank-input correct" type="text" value="${escapeHtml(question.answer)}" aria-label="Correct answer" readonly /></div></div>`;
    return `
      <article class="question-card answer-key-question" id="answer-key-question-${escapeHtml(question.id)}">
        <div class="question-meta">
          <span class="question-type">${escapeHtml(question.label || 'Question')}</span>
          <span>${index + 1} of ${answerKeyQuestions.length}</span>
        </div>
        <h2>${escapeHtml(question.title)}</h2>
        ${answerMarkup}
      </article>
    `;
  }).join('');

  answerKeyNavigation.innerHTML = answerKeyQuestions.map((question, index) => `
    <button class="question-number" data-answer-key-number="${escapeHtml(question.id)}" type="button" aria-label="Go to answer ${index + 1}">${index + 1}</button>
  `).join('');
  $$('[data-answer-key-number]').forEach((button) => button.addEventListener('click', () => {
    $(`#answer-key-question-${CSS.escape(button.dataset.answerKeyNumber)}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

function multiAnswerMarkup(question) {
  const saved = state.answers[question.id] || {};
  const selectedIndices = Array.isArray(saved.selected) ? saved.selected : [];
  const buttonLabel = state.answerMode === 'end' ? 'Save selection' : 'Check answer';
  const needCount = Math.min(question.selectCount || question.answers?.length || 1, question.options.length);
  const selectionLimitReached = selectedIndices.length >= needCount;

  return `
    <span class="multi-instruction">Select ${needCount} answer${needCount > 1 ? 's' : ''}</span>
    <div class="answer-options">
      ${optionOrderFor(question).map((originalIndex) => {
        const option = question.options[originalIndex];
        const isSelected = selectedIndices.includes(originalIndex);
        let statusClass = '';
        if (state.checked) {
          const isExpected = question.answers.includes(originalIndex);
          if (isExpected) statusClass = 'correct';
          else if (isSelected && !isExpected) statusClass = 'incorrect';
        }
        return `
          <button class="answer-option ${isSelected ? 'selected' : ''} ${statusClass}" data-multi-option="${originalIndex}" type="button" ${selectionLimitReached && !isSelected ? 'disabled' : ''}>
            <span class="checkbox-mark">${isSelected ? '✓' : ''}</span>
            <span>${escapeHtml(option)}</span>
          </button>
        `;
      }).join('')}
    </div>
    <div class="multi-check-action">
      <button class="primary-button" id="checkMultiButton" type="button" ${selectedIndices.length === 0 ? 'disabled' : ''}>
        ${buttonLabel} <span>✓</span>
      </button>
    </div>
  `;
}

function fillBlankMarkup(question) {
  const saved = state.answers[question.id] || {};
  const currentVal = saved.value || '';
  const buttonLabel = state.answerMode === 'end' ? 'Save answer' : 'Check answer';
  let inputStatus = '';
  if (state.checked) {
    inputStatus = saved.correct ? 'correct' : 'incorrect';
  }

  return `
    <div class="fill-blank-card">
      <div class="fill-blank-input-wrap">
        <input class="fill-blank-input ${inputStatus}" id="blankInput" type="text" placeholder="Type your answer here..." value="${escapeHtml(currentVal)}" autocomplete="off" spellcheck="false" ${state.checked && state.answerMode === 'immediate' ? 'disabled' : ''} />
        <button class="primary-button" id="checkBlankButton" type="button">
          ${buttonLabel} <span>✓</span>
        </button>
      </div>
    </div>
  `;
}

function selectOption(index, question) {
  if (state.answerMode === 'end') {
    state.selected = index;
    state.checked = false;
    state.answers[question.id] = { selected: index, checked: false, correct: index === question.answer };
  } else {
    if (state.checked) return;
    state.selected = index;
    state.answers[question.id] = { selected: index, checked: true, correct: index === question.answer };
    state.checked = true;
  }
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function toggleMultiOption(index, question) {
  if (state.checked && state.answerMode === 'immediate') return;
  const current = state.answers[question.id] || {};
  let selected = Array.isArray(current.selected) ? [...current.selected] : [];
  if (selected.includes(index)) {
    selected = selected.filter((i) => i !== index);
  } else {
    const needCount = Math.min(question.selectCount || question.answers?.length || 1, question.options.length);
    if (selected.length >= needCount) return;
    selected.push(index);
  }
  state.answers[question.id] = { ...current, selected, checked: false };
  saveAnswers();
  renderQuiz();
}

function checkMultiAnswer(question) {
  const saved = state.answers[question.id] || {};
  const selected = Array.isArray(saved.selected) ? [...saved.selected].sort() : [];
  const expected = [...question.answers].sort();
  const correct = selected.length === expected.length && selected.every((val, idx) => val === expected[idx]);

  state.answers[question.id] = {
    selected,
    checked: true,
    correct
  };
  state.checked = state.answerMode === 'immediate';
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function checkBlankAnswer(question) {
  const input = $('#blankInput');
  const val = input ? input.value.trim() : '';
  const expected = question.answer.trim();
  const correct = question.caseSensitive ? val === expected : val.toLowerCase() === expected.toLowerCase();

  state.answers[question.id] = {
    value: val,
    checked: true,
    correct
  };
  state.checked = state.answerMode === 'immediate';
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function checkCode(question) {
  const blanks = $$('.code-blank');
  const values = blanks.map((input) => input.value);
  const correct = blanks.length > 0 && blanks.every((input) => input.value.trim().toLowerCase() === input.dataset.answer.toLowerCase());
  state.answers[question.id] = { checked: true, correct, values };
  state.checked = true;
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function saveCodeAnswer(question) {
  const values = $$('.code-blank').map((input) => input.value);
  const correct = values.length > 0 && values.every((value, index) => value.trim().toLowerCase() === getCodeAnswers(question)[index].toLowerCase());
  state.answers[question.id] = { values, checked: false, correct };
  state.checked = false;
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function renderQuiz() {
  const setup = $('#quizSetup');
  const session = $('#quizSession');
  if (!setup || !session) return;

  if (state.showResults) {
    setup.hidden = false;
    session.hidden = true;
    showResultsScreen();
    return;
  }
  if (!state.quizActive) {
    setup.hidden = false;
    session.hidden = true;
    renderQuizSetup();
    return;
  }

  setup.hidden = true;
  session.hidden = false;

  const list = filteredQuestions();
  if (!list.length) return;
  if (state.questionIndex >= list.length) state.questionIndex = 0;

  const question = list[state.questionIndex];
  const saved = state.answers[question.id] || {};
  state.selected = saved.selected ?? null;
  state.checked = Boolean(saved.checked);

  $('#answerModeToggle').checked = state.answerMode === 'end';
  $('#answerModeLabel').textContent = state.answerMode === 'end' ? 'At the end' : 'Right away';

  let questionContent = '';
  if (question.type === 'code-fill') {
    questionContent = codeMarkup(question);
  } else if (question.type === 'multi-answer') {
    questionContent = multiAnswerMarkup(question);
  } else if (question.type === 'fill-blank') {
    questionContent = fillBlankMarkup(question);
  } else {
    // Default multiple-choice
    questionContent = `<div class="answer-options">${optionOrderFor(question).map((originalIndex, displayIndex) => `
      <button class="answer-option ${state.selected === originalIndex ? 'selected' : ''} ${state.checked && originalIndex === question.answer ? 'correct' : ''} ${state.checked && state.selected === originalIndex && originalIndex !== question.answer ? 'incorrect' : ''}" data-option="${originalIndex}" type="button">
        <span class="option-letter">${String.fromCharCode(65 + displayIndex)}</span>
        <span>${escapeHtml(question.options[originalIndex])}</span>
      </button>
    `).join('')}</div>`;
  }

  const feedbackMarkup = state.checked && state.answerMode === 'immediate' ? `
    <div class="feedback ${saved.correct ? '' : 'wrong'}">
      ${saved.correct ? 'Correct! ' : 'Not quite. '} ${escapeHtml(question.explanation || '')}
    </div>
  ` : '';

  $('#questionContainer').innerHTML = `
    <article class="question-card">
      <div class="question-meta">
        <span class="question-type">${question.label || (question.type === 'code-fill' ? 'Coding exercise' : 'Question')}</span>
        <span>${state.questionIndex + 1} of ${list.length}</span>
      </div>
      <h2>${escapeHtml(question.title)}</h2>
      ${questionContent}
      ${feedbackMarkup}
    </article>
  `;

  const hasAnswer = isQuestionAnswered(question);
  $('#nextButton').disabled = state.answerMode === 'immediate' ? !state.checked : !hasAnswer;
  $('#nextButton').textContent = state.questionIndex === list.length - 1 ? 'Finish session  →' : 'Next question  →';
  $('#previousButton').disabled = state.questionIndex === 0;

  const checkedCount = list.filter((item) => state.answers[item.id]?.checked).length;
  const correctCount = list.filter((item) => state.answers[item.id]?.checked && state.answers[item.id]?.correct).length;
  const answeredCount = list.filter((item) => isQuestionAnswered(item)).length;
  $('#sessionScore').textContent = state.answerMode === 'end' ? `${answeredCount} answered` : `${correctCount} / ${checkedCount}`;

  renderQuestionList(list);

  // Attach event handlers
  $$('.answer-option[data-option]').forEach((option) => {
    option.addEventListener('click', () => selectOption(Number(option.dataset.option), question));
  });

  $$('[data-multi-option]').forEach((option) => {
    option.addEventListener('click', () => toggleMultiOption(Number(option.dataset.multiOption), question));
  });

  $('#checkMultiButton')?.addEventListener('click', () => checkMultiAnswer(question));
  $('#checkBlankButton')?.addEventListener('click', () => checkBlankAnswer(question));
  $('#blankInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkBlankAnswer(question);
  });
  $('#checkCodeButton')?.addEventListener('click', () => state.answerMode === 'end' ? saveCodeAnswer(question) : checkCode(question));
  $('#changeSubjectButton')?.addEventListener('click', () => {
    state.quizActive = false;
    state.showResults = false;
    state.quizSetupStep = 'subjects';
    renderQuiz();
  });
}

function renderQuestionList(list) {
  const container = $('#questionList');
  if (!container) return;
  container.innerHTML = list.map((question, index) => {
    const done = isQuestionAnswered(question);
    return `<button class="question-number ${index === state.questionIndex ? 'current' : ''} ${done ? 'done' : ''}" data-question-number="${index}" type="button">${index + 1}</button>`;
  }).join('');

  $$('[data-question-number]').forEach((button) => {
    button.addEventListener('click', () => {
      state.questionIndex = Number(button.dataset.questionNumber);
      renderQuiz();
    });
  });
}

function saveAnswers() {
  localStorage.setItem('midtermAnswers', JSON.stringify(state.answers));
}

function updateDashboard() {
  const answeredCount = Object.values(state.answers).filter((ans) => ans.checked || ans.selected !== null && ans.selected !== undefined || ans.value || ans.values?.length).length;
  const percent = Math.min(100, Math.round((answeredCount / 10) * 100));
  const progressPercent = $('#progressPercent');
  const progressLabel = $('#progressLabel');
  const progressBarFill = $('#progressBarFill');
  if (progressPercent) progressPercent.textContent = `${percent}%`;
  if (progressLabel) progressLabel.textContent = `${answeredCount} of 10 questions answered`;
  if (progressBarFill) progressBarFill.style.width = `${percent}%`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
}

// Global controls
ensureAnswerKeyView();
const skipButton = $('#skipButton');
if (skipButton) {
  const previousButton = document.createElement('button');
  previousButton.id = 'previousButton';
  previousButton.className = skipButton.className;
  previousButton.type = 'button';
  previousButton.textContent = '← Previous';
  previousButton.disabled = true;
  skipButton.before(previousButton);
  previousButton.addEventListener('click', () => {
    if (state.questionIndex > 0) {
      state.questionIndex -= 1;
      renderQuiz();
    }
  });
}

$('#nextButton')?.addEventListener('click', () => {
  const list = filteredQuestions();
  if (state.questionIndex < list.length - 1) {
    state.questionIndex += 1;
    renderQuiz();
  } else {
    finishSession();
  }
});

$('#skipButton')?.addEventListener('click', () => {
  const list = filteredQuestions();
  state.questionIndex = (state.questionIndex + 1) % list.length;
  renderQuiz();
});

$('#answerModeToggle')?.addEventListener('change', (event) => {
  state.answerMode = event.target.checked ? 'end' : 'immediate';
  renderQuiz();
});

$('#menuButton')?.addEventListener('click', () => $('#sidebar')?.classList.toggle('open'));
$('#themeToggle')?.addEventListener('click', () => {
  state.dark = !state.dark;
  document.body.classList.toggle('dark', state.dark);
  localStorage.setItem('midtermDark', String(state.dark));
});

$$('[data-view]').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
$$('[data-go-to]').forEach((button) => button.addEventListener('click', () => setView(button.dataset.goTo)));

document.body.classList.toggle('dark', state.dark);
renderSidebarSubjects();
renderSubjects();
updateDashboard();
renderQuiz();

const weekBars = [
  { day: 'M', height: 36 },
  { day: 'T', height: 58 },
  { day: 'W', height: 26 },
  { day: 'T', height: 70 },
  { day: 'F', height: 43 },
  { day: 'S', height: 18 },
  { day: 'S', height: 7 }
];
const weekBarsEl = $('#weekBars');
if (weekBarsEl) {
  weekBarsEl.innerHTML = weekBars.map((bar, index) => `
    <div class="week-bar-wrap">
      <span class="week-bar ${index === 4 ? 'today' : ''}" style="height:${bar.height}%"></span>
      <small>${bar.day}</small>
    </div>
  `).join('');
}

function renderQuizSetup() {
  const setup = $("#quizSetup");
  const setupSubjects = [{ id: "all", title: "All subjects", desc: "A mixed review across every topic", count: `${questions.length} questions`, icon: "✦", color: "blue" }, ...subjects];
  const selected = getSelectedSubjects();
  const selectedCount = selected.includes("all") ? subjects.length : selected.length;
  const cards = setupSubjects.map((subject) => { const isSelected = subject.id === "all" ? selected.includes("all") : selected.includes(subject.id); return `<button class="setup-subject-card ${isSelected ? "selected" : ""}" data-setup-subject="${subject.id}" type="button"><span class="subject-card-icon ${subject.color}">${subject.icon}</span><span><strong>${subject.title}</strong><small>${subject.desc}</small></span><em>${subject.count}</em></button>`; }).join("");
  setup.innerHTML = `<div class="quiz-header setup-header"><div><p class="eyebrow accent">Practice mode</p><h1>Choose what to lock in.</h1><p class="view-intro">Pick one or more subjects for this review session.</p></div></div><div class="setup-subject-layout"><section class="setup-subjects"><p class="eyebrow">Subjects · ${selectedCount} selected</p><div class="setup-subject-grid">${cards}</div></section><aside class="panel setup-start-panel"><p class="eyebrow">Ready?</p><h2>${selectedCount} subject${selectedCount === 1 ? "" : "s"} selected.</h2><p>Questions from the selected subjects will be mixed into one quiz.</p><button class="primary-button start-quiz-button" id="startQuizButton" type="button">Start quiz <span>→</span></button></aside></div>`;
  $$('[data-setup-subject]').forEach((button) => button.addEventListener("click", () => { const id = button.dataset.setupSubject; if (id === "all") { state.sessionSubjects = ["all"]; state.sessionSubject = "all"; } else { let next = selected.includes("all") ? [] : [...selected]; next = next.includes(id) ? next.filter((subject) => subject !== id) : [...next, id]; if (!next.length) next = ["all"]; state.sessionSubjects = next; state.sessionSubject = next.length === 1 ? next[0] : "all"; } state.sessionQuestionIds = null; renderQuizSetup(); }));
  $("#startQuizButton").addEventListener("click", () => startQuiz(false));
}

state.sessionSubjects = null;

function getSelectedSubjects() {
  const availableSubjectIds = getSubjects().map((subject) => subject.id);
  if (Array.isArray(state.sessionSubjects)) {
    return state.sessionSubjects.filter((subject) => availableSubjectIds.includes(subject));
  }
  if (state.sessionSubject !== "all" && availableSubjectIds.includes(state.sessionSubject)) {
    return [state.sessionSubject];
  }
  return availableSubjectIds;
}
function questionsForSelectedSubjects() {
  const selected = getSelectedSubjects();
  return questions.filter((question) => selected.some((subject) => {
    const group = subjectGroups[subject];
    return group ? group.subjects.includes(question.subject) : subject === question.subject;
  }));
}
function subjectQuestions() {
  const selectedQuestions = questionsForSelectedSubjects();
  return selectedQuestions.filter((question) => state.questionTypes.includes(question.type));
}
function filteredQuestions() {
  const availableQuestions = subjectQuestions();
  if (!state.sessionQuestionIds) return availableQuestions;
  const questionsById = new Map(availableQuestions.map((question) => [question.id, question]));
  return state.sessionQuestionIds.map((id) => questionsById.get(id)).filter(Boolean);
}

function renderQuizSetup() {
  const currentSubjects = getSubjects();
  const setupSubjects = currentSubjects;
  const selected = getSelectedSubjects();
  const selectedCount = selected.length;
  const selectedQuestions = questionsForSelectedSubjects();
  const availableQuestions = subjectQuestions();
  const questionTypeOptions = [
    { id: 'mixed', title: 'Mixed question types', description: 'Include every available format' },
    { id: 'multiple-choice', title: 'Multiple choice', description: 'Choose one answer' },
    { id: 'fill-blank', title: 'Fill in the blank', description: 'Type the missing answer' },
    { id: 'code-fill', title: 'Code fill-in-the-blank', description: 'Complete the missing code' },
    { id: 'multi-answer', title: 'Multi-answer', description: 'Select all correct answers' }
  ];
  const availableTypes = questionTypeOptions
    .filter((option) => option.id !== 'mixed')
    .filter((option) => selectedQuestions.some((question) => question.type === option.id));
  const mixedSelected = availableTypes.length > 0
    && availableTypes.every((option) => state.questionTypes.includes(option.id));

  if (state.quizSetupStep === 'subjects') {
    $("#quizSetup").innerHTML = `
      <div class="quiz-header setup-header"><div><p class="eyebrow accent">Practice mode · Step 1 of 2</p><h1>Choose what to lock in.</h1><p class="view-intro">Select one or more subjects for your review session.</p></div></div>
      <div class="setup-subject-layout">
        <section class="setup-subjects">
          <p class="eyebrow">Subjects · ${selectedCount} selected</p>
          <div class="setup-subject-grid">${setupSubjects.map((subject) => {
            const isSelected = selected.includes(subject.id);
            return `<button class="setup-subject-card ${isSelected ? "selected" : ""}" data-setup-subject="${subject.id}" type="button" aria-pressed="${isSelected}"><span class="subject-card-icon ${subject.color}">${subject.icon}</span><span><strong>${escapeHtml(subject.title)}</strong><small>${escapeHtml(subject.desc)}</small></span><em>${escapeHtml(subject.count)}</em></button>`;
          }).join("")}</div>
        </section>
        <aside class="panel setup-start-panel"><p class="eyebrow">Next</p><h2>${selectedCount} subject${selectedCount === 1 ? "" : "s"} selected.</h2><p>Choose the question formats you want on the next step.</p><button class="primary-button start-quiz-button" id="continueToFormatsButton" type="button" ${selectedCount ? "" : "disabled"}>Choose question types <span>→</span></button></aside>
      </div>`;

    $$('[data-setup-subject]').forEach((button) => button.addEventListener("click", () => {
      const id = button.dataset.setupSubject;
      const next = selected.includes(id)
        ? selected.filter((subject) => subject !== id)
        : [...selected, id];
      state.sessionSubjects = next;
      state.sessionSubject = next.length === 1 ? next[0] : "all";
      state.sessionQuestionIds = null;
      renderSidebarSubjects();
      renderQuizSetup();
    }));
    $('#continueToFormatsButton').addEventListener('click', () => {
      state.quizSetupStep = 'formats';
      renderQuizSetup();
    });
    return;
  }

  const questionTypeMarkup = questionTypeOptions.map((option) => {
    const count = option.id === 'mixed'
      ? selectedQuestions.length
      : selectedQuestions.filter((question) => question.type === option.id).length;
    const isSelected = option.id === 'mixed'
      ? mixedSelected
      : state.questionTypes.includes(option.id) && count > 0;
    return `<button class="mode-option ${isSelected ? 'selected' : ''}" data-question-type="${option.id}" type="button" aria-pressed="${isSelected}" ${count ? '' : 'disabled'}>
      <strong>${option.title}</strong><span>${option.description} · ${count} question${count === 1 ? '' : 's'}</span>
    </button>`;
  }).join('');

  $("#quizSetup").innerHTML = `
    <div class="quiz-header setup-header"><div><p class="eyebrow accent">Practice mode · Step 2 of 2</p><h1>Choose question types.</h1><p class="view-intro">Select one or more formats, or choose mixed for all available types.</p></div></div>
    <div class="setup-subject-layout">
      <section class="setup-subjects">
        <p class="eyebrow question-type-heading">Question format · ${availableTypes.filter((option) => state.questionTypes.includes(option.id)).length} selected</p>
        <div class="question-type-options" role="group" aria-label="Question format">${questionTypeMarkup}</div>
        <label class="shuffle-questions-option"><input id="shuffleQuestionsToggle" type="checkbox" ${state.shuffleQuestions ? 'checked' : ''}><span><strong>Shuffle all questions</strong><small>Randomize the order of questions in this quiz.</small></span></label>
      </section>
      <aside class="panel setup-start-panel"><p class="eyebrow">Ready?</p><h2>${selectedCount} subject${selectedCount === 1 ? "" : "s"} selected.</h2><p>${availableQuestions.length} question${availableQuestions.length === 1 ? '' : 's'} match the selected formats.</p><button class="primary-button start-quiz-button" id="startQuizButton" type="button" ${availableQuestions.length && selectedCount ? '' : 'disabled'}>Start quiz <span>→</span></button><button class="secondary-button setup-back-button" id="backToSubjectsButton" type="button">← Back to subjects</button></aside>
    </div>`;

  $$('[data-question-type]').forEach((button) => button.addEventListener('click', () => {
    const id = button.dataset.questionType;
    if (id === 'mixed') {
      state.questionTypes = ['multiple-choice', 'fill-blank', 'code-fill', 'multi-answer'];
    } else {
      const next = state.questionTypes.includes(id)
        ? state.questionTypes.filter((type) => type !== id)
        : [...state.questionTypes, id];
      state.questionTypes = next;
    }
    state.sessionQuestionIds = null;
    renderQuizSetup();
  }));
  $('#backToSubjectsButton').addEventListener('click', () => {
    state.quizSetupStep = 'subjects';
    renderQuizSetup();
  });
  $('#shuffleQuestionsToggle').addEventListener('change', (event) => {
    state.shuffleQuestions = event.target.checked;
  });
  $("#startQuizButton").addEventListener("click", () => startQuiz(false));
}

async function loadQuestionBank() {
  try {
    const manifestResponse = await fetch(new URL('question-banks/manifest.json', document.baseURI), { cache: 'no-store' });
    if (!manifestResponse.ok) throw new Error(`Question-bank manifest request failed: ${manifestResponse.status}`);
    const bankFiles = await manifestResponse.json();
    if (!Array.isArray(bankFiles) || !bankFiles.length || bankFiles.some((file) => (
      typeof file !== 'string' || !file.endsWith('.json') || file.includes('/') || file.includes('\\')
    ))) {
      throw new Error('question-banks/manifest.json must contain a non-empty array of JSON filenames.');
    }
    if (new Set(bankFiles).size !== bankFiles.length) {
      throw new Error('question-banks/manifest.json contains duplicate filenames.');
    }

    const loadedBanks = await Promise.all(bankFiles.map(async (filename) => {
      const bankUrl = new URL(`question-banks/${encodeURIComponent(filename)}`, document.baseURI);
      const response = await fetch(bankUrl, { cache: 'no-store' });
      if (!response.ok) throw new Error(`${filename} request failed: ${response.status}`);
      const loadedQuestions = await response.json();
      if (!Array.isArray(loadedQuestions)) throw new Error(`${filename} must contain an array.`);
      return loadedQuestions;
    }));
    const loadedQuestions = loadedBanks.flat();
    if (!loadedQuestions.length) throw new Error('Question banks are empty.');
    const questionIds = loadedQuestions.map((question) => question.id);
    if (questionIds.some((id) => id === undefined) || new Set(questionIds).size !== questionIds.length) {
      throw new Error('Question IDs must be present and unique across all banks in the manifest.');
    }
    questions = loadedQuestions;
    renderSidebarSubjects();
    renderSubjects();
    updateDashboard();
    renderQuiz();
    if (state.view === 'answer-key') renderAnswerKey();
  } catch (error) {
    console.info('Using embedded question fallback. Serve the app over HTTP and check question-banks/manifest.json to load question banks.', error);
  }
}

loadQuestionBank();
